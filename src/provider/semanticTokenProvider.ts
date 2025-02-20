import * as vscode from "vscode";
import {
  CharStreams,
  CommonTokenStream,
  ErrorListener,
  ErrorNode,
  ParserRuleContext,
  ParseTreeWalker,
  RecognitionException,
  Recognizer,
  TerminalNode,
  Token,
} from "antlr4";
import JASS2Lexer from "../generated/JASS2Lexer";
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
} from "../generated/JASS2Parser";
import JASS2Listener from "../generated/JASS2Listener";

export const legend = new vscode.SemanticTokensLegend(
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

export class Jass2SemanticTokenProvider
  implements vscode.DocumentSemanticTokensProvider
{
  private diagnosticCollection: vscode.DiagnosticCollection;
  constructor(diagnosticCollection: vscode.DiagnosticCollection) {
    this.diagnosticCollection = diagnosticCollection;
  }
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

    const diagnostics: vscode.Diagnostic[] = [];
    parser.addErrorListener(new Jass2ErrorListener(diagnostics));

    // Step 2: Parse the document
    const tree = parser.root(); // Adjust based on your grammar's root rule

    // Step 3: Walk the parse tree and extract semantic tokens
    const tokenListener = new Jass2TokenListener(document, builder, token);
    try {
      ParseTreeWalker.DEFAULT.walk(tokenListener, tree);
    } catch (e) {
      // do nothing
    }

    this.diagnosticCollection.set(document.uri, diagnostics);

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
    this.addToken(ctx.varname().ID(), "parameter");
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

export class Jass2ErrorListener implements ErrorListener<Token> {
  private diagnostics: vscode.Diagnostic[];

  constructor(diagnostics: vscode.Diagnostic[]) {
    this.diagnostics = diagnostics;
  }
  syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    // Convert to zero-based index
    const start = new vscode.Position(line - 1, column);
    const end = new vscode.Position(
      line - 1,
      column + (offendingSymbol.stop - offendingSymbol.start + 1)
    );
    const range = new vscode.Range(start, end);

    const diagnostic = new vscode.Diagnostic(
      range,
      msg,
      vscode.DiagnosticSeverity.Error
    );

    this.diagnostics.push(diagnostic);
  }
}
