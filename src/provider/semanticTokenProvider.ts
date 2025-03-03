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
  RootContext,
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
    const tokenListener = new Jass2TokenListener(
      document,
      builder,
      token,
      diagnostics
    );
    if (/function[ \t]+main/.test(text)) {
      tokenListener.enableUnusedCheck(true);
    }
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
  private diagnostics: vscode.Diagnostic[];

  private unusedCheck: boolean;
  private globalVariablesMap: Map<string, vscode.Range> = new Map();
  private globalVariablesUnused: Set<string> = new Set();
  private localVariablesMap: Map<string, vscode.Range> = new Map();
  private localVariablesUnused: Set<string> = new Set();

  constructor(
    document: vscode.TextDocument,
    builder: vscode.SemanticTokensBuilder,
    cancellationToken: vscode.CancellationToken,
    diagnostics: vscode.Diagnostic[]
  ) {
    this.document = document;
    this.builder = builder;
    this.cancellationToken = cancellationToken;
    this.diagnostics = diagnostics;
    this.unusedCheck = false;
  }

  enableUnusedCheck(enableUnusedCheck: boolean) {
    this.unusedCheck = enableUnusedCheck;
  }

  visitTerminal(node: TerminalNode): void {}
  visitErrorNode(node: ErrorNode): void {}

  enterEveryRule(ctx: ParserRuleContext): void {
    if (this.cancellationToken.isCancellationRequested) {
      throw new Error("Operation canceled");
    }
  }

  exitEveryRule(ctx: ParserRuleContext): void {}

  exitRoot(ctx: RootContext) {
    if (this.unusedCheck) {
      for (const varname of this.globalVariablesUnused) {
        this.diagnostics.push(
          new vscode.Diagnostic(
            this.globalVariablesMap.get(varname)!,
            `Variable ${varname} declared but never used`,
            vscode.DiagnosticSeverity.Warning
          )
        );
      }
      this.globalVariablesUnused.clear();
      this.globalVariablesMap.clear();
    }
  }

  enterType(ctx: TypeContext) {
    this.addToken(ctx.ID(), "type", ["definition"]);
    this.addToken(ctx.extendsRule().ID(), "type");
  }

  enterVariable(ctx: VariableContext) {
    this.addToken(ctx.typename().ID(), "type");
    if (ctx.ARRAY()) {
      this.addToken(ctx.ARRAY(), "type");
    }
    const varnameToken = ctx.varname().ID();
    if (ctx.CONSTANT()) {
      this.addToken(varnameToken, "variable", ["declaration", "readonly"]);
    } else {
      this.addToken(varnameToken, "variable", ["declaration"]);
    }

    if (this.unusedCheck) {
      const varname = varnameToken.getText();
      if (!ctx.LOCAL()) {
        const range = this.globalVariablesMap.get(varname);
        if (range) {
          this.diagnostics.push(
            new vscode.Diagnostic(
              new vscode.Range(
                this.document.positionAt(varnameToken.symbol.start),
                this.document.positionAt(varnameToken.symbol.stop + 1)
              ),
              `Variable ${varname} already declared at ${range.start.line}:${range.start.character}`,
              vscode.DiagnosticSeverity.Error
            )
          );
        } else {
          this.globalVariablesMap.set(
            varname,
            new vscode.Range(
              this.document.positionAt(varnameToken.symbol.start),
              this.document.positionAt(varnameToken.symbol.stop + 1)
            )
          );
          this.globalVariablesUnused.add(varname);
        }
      } else {
        const range = this.localVariablesMap.get(varname);
        if (range) {
          this.diagnostics.push(
            new vscode.Diagnostic(
              new vscode.Range(
                this.document.positionAt(varnameToken.symbol.start),
                this.document.positionAt(varnameToken.symbol.stop + 1)
              ),
              `Variable ${varname} already declared at ${range.start.line}:${range.start.character}`,
              vscode.DiagnosticSeverity.Error
            )
          );
        } else {
          this.localVariablesMap.set(
            varname,
            new vscode.Range(
              this.document.positionAt(varnameToken.symbol.start),
              this.document.positionAt(varnameToken.symbol.stop + 1)
            )
          );
          this.localVariablesUnused.add(varname);
        }

        const globalRange = this.globalVariablesMap.get(varname);
        if (globalRange) {
          this.diagnostics.push(
            new vscode.Diagnostic(
              new vscode.Range(
                this.document.positionAt(varnameToken.symbol.start),
                this.document.positionAt(varnameToken.symbol.stop + 1)
              ),
              `Variable ${varname} shades global variable at ${globalRange.start.line}:${globalRange.start.character}`,
              vscode.DiagnosticSeverity.Warning
            )
          );
        }
      }
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

  exitFunction(ctx: FunctionContext) {
    if (this.unusedCheck) {
      for (const varname of this.localVariablesUnused) {
        this.diagnostics.push(
          new vscode.Diagnostic(
            this.localVariablesMap.get(varname)!,
            `Variable ${varname} declared but never used`,
            vscode.DiagnosticSeverity.Warning
          )
        );
      }
      this.localVariablesUnused.clear();
      this.localVariablesMap.clear();
    }
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

    if (this.unusedCheck) {
      const varname = ctx.ID().getText();
      if (!this.localVariablesUnused.delete(varname)) {
        this.globalVariablesUnused.delete(varname);
      }
    }
  }

  enterExprUn(ctx: ExprUnContext) {
    this.addToken(ctx.NOT() || ctx.MINUS(), "operator");
  }

  enterExprVar(ctx: ExprVarContext) {
    this.addToken(ctx.ID(), "variable");

    if (this.unusedCheck) {
      const varname = ctx.ID().getText();
      if (!this.localVariablesUnused.delete(varname)) {
        this.globalVariablesUnused.delete(varname);
      }
    }
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
