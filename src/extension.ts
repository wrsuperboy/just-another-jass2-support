import * as vscode from "vscode";
import * as path from "path";
import * as cp from "child_process";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";
import {
  CharStreams,
  CommonTokenStream,
  ErrorNode,
  ParserRuleContext,
  ParseTreeWalker,
  TerminalNode,
} from "antlr4";
import JASS2Lexer from "./generated/JASS2Lexer";
import JASS2Parser, {
  ExprAddContext,
  ExprAndContext,
  ExprArrContext,
  ExprCallContext,
  ExprEqContext,
  ExprFunContext,
  ExprIntContext,
  ExprLtContext,
  ExprMulContext,
  ExprRealContext,
  ExprStrContext,
  ExprUnContext,
  ExprVarContext,
  FunctionContext,
  NativeRuleContext,
  ParamContext,
  ReturnsRuleContext,
  StmtCallContext,
  StmtSetContext,
  TypeContext,
  VariableContext,
} from "./generated/JASS2Parser";
import JASS2Listener from "./generated/JASS2Listener";

const legend = new vscode.SemanticTokensLegend(
  [
    "type",
    "parameter",
    "function",
    "variable",
    "constant",
    "comment",
    "number",
    "string",
    "operator",
  ],
  ["definition", "declaration", "readonly"]
);

export function activate(context: vscode.ExtensionContext) {
  let serverModule = context.asAbsolutePath(path.join("target", "server.js"));
  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: { module: serverModule, transport: TransportKind.ipc },
  };

  let clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "jass2" }],
  };

  let client = new LanguageClient(
    "jass2LanguageServer",
    "JASS Language Server",
    serverOptions,
    clientOptions
  );

  context.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider(
      { language: "jass2" },
      new Jass2SemanticTokenProvider(),
      legend
    )
  );

  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(
      { language: "jass2" },
      { provideDefinition }
    )
  );
  context.subscriptions.push(client);
  client.start();
}

export function provideDefinition(
  document: vscode.TextDocument,
  position: vscode.Position,
  token: vscode.CancellationToken
): vscode.Definition | null {
  const text = document.getText();
  const wordRange = document.getWordRangeAtPosition(position);
  const word = wordRange ? document.getText(wordRange) : "";

  const regex = new RegExp(`(function\\s+)${word}\\s+takes`);
  const match = regex.exec(text);

  if (match) {
    const index = match.index + match[1].length;
    const start = document.positionAt(index);
    const end = document.positionAt(index + word.length);
    return new vscode.Location(document.uri, new vscode.Range(start, end));
  }

  return null;
}

export class Jass2SemanticTokenProvider
  implements vscode.DocumentSemanticTokensProvider
{
  async provideDocumentSemanticTokens(
    document: vscode.TextDocument,
    token: vscode.CancellationToken
  ): Promise<vscode.SemanticTokens> {
    const builder = new vscode.SemanticTokensBuilder(legend);
    const text = document.getText();

    // Step 1: Use ANTLR to tokenize and parse the document
    const inputStream = CharStreams.fromString(text);
    const lexer = new JASS2Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new JASS2Parser(tokenStream);

    // Step 2: Parse the document
    const tree = parser.root(); // Adjust based on your grammar's root rule

    // Step 3: Walk the parse tree and extract semantic tokens
    const tokenListener = new Jass2TokenListener(document, builder, token);
    ParseTreeWalker.DEFAULT.walk(tokenListener, tree);

    return builder.build();
  }
}

class Jass2TokenListener implements JASS2Listener {
  private document: vscode.TextDocument;
  private builder: vscode.SemanticTokensBuilder;
  private cancellationToken: vscode.CancellationToken;

  constructor(
    document: vscode.TextDocument,
    builder: vscode.SemanticTokensBuilder,
    cancellationToken: vscode.CancellationToken
  ) {
    this.document = document;
    this.builder = builder;
    this.cancellationToken = cancellationToken;
  }

  visitTerminal(node: TerminalNode): void {}
  visitErrorNode(node: ErrorNode): void {}

  enterEveryRule(ctx: ParserRuleContext): void {
    if (this.cancellationToken.isCancellationRequested) {
      throw new Error("Operation canceled");
    }
  }

  exitEveryRule(ctx: ParserRuleContext): void {}

  enterType(ctx: TypeContext) {
    this.addToken(ctx.ID(), "type", ["definition"]);
    this.addToken(ctx.extendsRule().ID(), "type");
  }

  enterVariable(ctx: VariableContext) {
    this.addToken(ctx.typename().ID(), "type");
    if (ctx.CONSTANT()) {
      this.addToken(ctx.varname().ID(), "variable", [
        "declaration",
        "readonly",
      ]);
    } else {
      this.addToken(ctx.varname().ID(), "variable", ["declaration"]);
    }
  }

  enterParam(ctx: ParamContext) {
    this.addToken(ctx.typename().ID(), "type");
    this.addToken(ctx.varname().ID(), "variable");
  }

  enterReturnsRule(ctx: ReturnsRuleContext) {
    const typeName = ctx.ID();
    if (typeName) {
      this.addToken(typeName, "type");
    }
  }

  enterNativeRule(ctx: NativeRuleContext) {
    this.addToken(ctx.ID(), "function", ["definition"]);
  }

  enterFunction(ctx: FunctionContext) {
    this.addToken(ctx.ID(), "function", ["declaration"]);
  }

  enterStmtSet(ctx: StmtSetContext) {
    this.addToken(ctx.ID(), "variable");
  }

  enterStmtCall(ctx: StmtCallContext) {
    this.addToken(ctx.ID(), "function");
  }

  enterExprInt(ctx: ExprIntContext) {
    this.addToken(ctx.INTVAL() || ctx.HEXVAL() || ctx.RAWVAL(), "number");
  }

  enterExprStr(ctx: ExprStrContext) {
    this.addToken(ctx.STRING(), "string");
  }

  enterExprArr(ctx: ExprArrContext) {
    this.addToken(ctx.ID(), "variable");
  }

  enterExprUn(ctx: ExprUnContext) {
    this.addToken(ctx.NOT() || ctx.MINUS(), "operator");
  }

  enterExprVar(ctx: ExprVarContext) {
    this.addToken(ctx.ID(), "variable");
  }

  enterExprEq(ctx: ExprEqContext) {
    this.addToken(ctx.EQ_EQ() || ctx.NEQ(), "operator");
  }

  enterExprFun(ctx: ExprFunContext) {
    this.addToken(ctx.ID(), "function");
  }

  enterExprCall(ctx: ExprCallContext) {
    this.addToken(ctx.ID(), "function");
  }

  enterExprLt(ctx: ExprLtContext) {
    this.addToken(
      ctx.LT() || ctx.LT_EQ() || ctx.GT() || ctx.GT_EQ(),
      "operator"
    );
  }

  enterExprMul(ctx: ExprMulContext) {
    this.addToken(ctx.MUL() || ctx.DIV(), "operator");
  }

  enterExprAdd(ctx: ExprAddContext) {
    this.addToken(ctx.PLUS() || ctx.MINUS(), "operator");
  }

  enterExprAnd(ctx: ExprAndContext) {
    this.addToken(ctx.AND() || ctx.OR(), "operator");
  }

  enterExprReal(ctx: ExprRealContext) {
    this.addToken(ctx.REALVAL(), "number");
  }

  private addToken(
    node: TerminalNode,
    tokenType: string,
    tokenModifiers?: readonly string[]
  ) {
    const start = this.document.positionAt(node.symbol.start);
    const end = this.document.positionAt(node.symbol.stop + 1);
    this.builder.push(new vscode.Range(start, end), tokenType, tokenModifiers);
  }
}
