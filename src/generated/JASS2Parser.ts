// Generated from src/JASS2.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JASS2Listener from "./JASS2Listener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JASS2Parser extends Parser {
	public static readonly RAWVAL = 1;
	public static readonly STRING = 2;
	public static readonly AND = 3;
	public static readonly ARRAY = 4;
	public static readonly CALL = 5;
	public static readonly CONSTANT = 6;
	public static readonly DEBUG = 7;
	public static readonly ELSE = 8;
	public static readonly ELSEIF = 9;
	public static readonly ENDFUNCTION = 10;
	public static readonly ENDIF = 11;
	public static readonly ENDLOOP = 12;
	public static readonly ENDGLOBALS = 13;
	public static readonly EXTENDS = 14;
	public static readonly EXITWHEN = 15;
	public static readonly FALSE = 16;
	public static readonly FUNCTION = 17;
	public static readonly GLOBALS = 18;
	public static readonly IF = 19;
	public static readonly LOCAL = 20;
	public static readonly LOOP = 21;
	public static readonly NATIVE = 22;
	public static readonly NOT = 23;
	public static readonly NOTHING = 24;
	public static readonly NULL = 25;
	public static readonly OR = 26;
	public static readonly RETURNS = 27;
	public static readonly RETURN = 28;
	public static readonly SET = 29;
	public static readonly TAKES = 30;
	public static readonly THEN = 31;
	public static readonly TRUE = 32;
	public static readonly TYPE = 33;
	public static readonly COMMA = 34;
	public static readonly EQ_EQ = 35;
	public static readonly EQ = 36;
	public static readonly NEQ = 37;
	public static readonly LT_EQ = 38;
	public static readonly LT = 39;
	public static readonly GT_EQ = 40;
	public static readonly GT = 41;
	public static readonly PLUS = 42;
	public static readonly MINUS = 43;
	public static readonly MUL = 44;
	public static readonly DIV = 45;
	public static readonly LPAREN = 46;
	public static readonly RPAREN = 47;
	public static readonly LBRACK = 48;
	public static readonly RBRACK = 49;
	public static readonly ID = 50;
	public static readonly INTVAL = 51;
	public static readonly HEXVAL = 52;
	public static readonly REALVAL = 53;
	public static readonly WS = 54;
	public static readonly NL = 55;
	public static readonly LINE_COMMENT = 56;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_typename = 1;
	public static readonly RULE_varname = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_extendsRule = 4;
	public static readonly RULE_globals = 5;
	public static readonly RULE_variable = 6;
	public static readonly RULE_param = 7;
	public static readonly RULE_takes = 8;
	public static readonly RULE_returnsRule = 9;
	public static readonly RULE_nativeRule = 10;
	public static readonly RULE_function = 11;
	public static readonly RULE_stmt = 12;
	public static readonly RULE_setBrack = 13;
	public static readonly RULE_elseif = 14;
	public static readonly RULE_elseRule = 15;
	public static readonly RULE_expr = 16;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'and'", 
                                                            "'array'", "'call'", 
                                                            "'constant'", 
                                                            "'debug'", "'else'", 
                                                            "'elseif'", 
                                                            "'endfunction'", 
                                                            "'endif'", "'endloop'", 
                                                            "'endglobals'", 
                                                            "'extends'", 
                                                            "'exitwhen'", 
                                                            "'false'", "'function'", 
                                                            "'globals'", 
                                                            "'if'", "'local'", 
                                                            "'loop'", "'native'", 
                                                            "'not'", "'nothing'", 
                                                            "'null'", "'or'", 
                                                            "'returns'", 
                                                            "'return'", 
                                                            "'set'", "'takes'", 
                                                            "'then'", "'true'", 
                                                            "'type'", "','", 
                                                            "'=='", "'='", 
                                                            "'!='", "'<='", 
                                                            "'<'", "'>='", 
                                                            "'>'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'('", 
                                                            "')'", "'['", 
                                                            "']'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "RAWVAL", 
                                                             "STRING", "AND", 
                                                             "ARRAY", "CALL", 
                                                             "CONSTANT", 
                                                             "DEBUG", "ELSE", 
                                                             "ELSEIF", "ENDFUNCTION", 
                                                             "ENDIF", "ENDLOOP", 
                                                             "ENDGLOBALS", 
                                                             "EXTENDS", 
                                                             "EXITWHEN", 
                                                             "FALSE", "FUNCTION", 
                                                             "GLOBALS", 
                                                             "IF", "LOCAL", 
                                                             "LOOP", "NATIVE", 
                                                             "NOT", "NOTHING", 
                                                             "NULL", "OR", 
                                                             "RETURNS", 
                                                             "RETURN", "SET", 
                                                             "TAKES", "THEN", 
                                                             "TRUE", "TYPE", 
                                                             "COMMA", "EQ_EQ", 
                                                             "EQ", "NEQ", 
                                                             "LT_EQ", "LT", 
                                                             "GT_EQ", "GT", 
                                                             "PLUS", "MINUS", 
                                                             "MUL", "DIV", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACK", "RBRACK", 
                                                             "ID", "INTVAL", 
                                                             "HEXVAL", "REALVAL", 
                                                             "WS", "NL", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "typename", "varname", "type", "extendsRule", "globals", "variable", 
		"param", "takes", "returnsRule", "nativeRule", "function", "stmt", "setBrack", 
		"elseif", "elseRule", "expr",
	];
	public get grammarFileName(): string { return "JASS2.g4"; }
	public get literalNames(): (string | null)[] { return JASS2Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JASS2Parser.symbolicNames; }
	public get ruleNames(): string[] { return JASS2Parser.ruleNames; }
	public get serializedATN(): number[] { return JASS2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JASS2Parser._ATN, JASS2Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JASS2Parser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 134289409) !== 0)) {
				{
				this.state = 38;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 34;
					this.type_();
					}
					break;
				case 2:
					{
					this.state = 35;
					this.nativeRule();
					}
					break;
				case 3:
					{
					this.state = 36;
					this.globals();
					}
					break;
				case 4:
					{
					this.state = 37;
					this.function_();
					}
					break;
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 43;
			this.match(JASS2Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typename(): TypenameContext {
		let localctx: TypenameContext = new TypenameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JASS2Parser.RULE_typename);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.match(JASS2Parser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varname(): VarnameContext {
		let localctx: VarnameContext = new VarnameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JASS2Parser.RULE_varname);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this.match(JASS2Parser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JASS2Parser.RULE_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(JASS2Parser.TYPE);
			this.state = 50;
			this.match(JASS2Parser.ID);
			this.state = 51;
			this.extendsRule();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendsRule(): ExtendsRuleContext {
		let localctx: ExtendsRuleContext = new ExtendsRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JASS2Parser.RULE_extendsRule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.match(JASS2Parser.EXTENDS);
			this.state = 54;
			this.match(JASS2Parser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public globals(): GlobalsContext {
		let localctx: GlobalsContext = new GlobalsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JASS2Parser.RULE_globals);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(JASS2Parser.GLOBALS);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===20 || _la===50) {
				{
				{
				this.state = 57;
				this.variable();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(JASS2Parser.ENDGLOBALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JASS2Parser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 65;
				this.match(JASS2Parser.CONSTANT);
				}
			}

			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 68;
				this.match(JASS2Parser.LOCAL);
				}
			}

			this.state = 71;
			this.typename();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 72;
				this.match(JASS2Parser.ARRAY);
				}
			}

			this.state = 75;
			this.varname();
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 76;
				this.match(JASS2Parser.EQ);
				this.state = 77;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let localctx: ParamContext = new ParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JASS2Parser.RULE_param);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.typename();
			this.state = 81;
			this.varname();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public takes(): TakesContext {
		let localctx: TakesContext = new TakesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JASS2Parser.RULE_takes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(JASS2Parser.TAKES);
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				{
				this.state = 84;
				this.match(JASS2Parser.NOTHING);
				}
				break;
			case 50:
				{
				{
				this.state = 85;
				this.param();
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===34) {
					{
					{
					this.state = 86;
					this.match(JASS2Parser.COMMA);
					this.state = 87;
					this.param();
					}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnsRule(): ReturnsRuleContext {
		let localctx: ReturnsRuleContext = new ReturnsRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JASS2Parser.RULE_returnsRule);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.match(JASS2Parser.RETURNS);
			this.state = 96;
			_la = this._input.LA(1);
			if(!(_la===24 || _la===50)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nativeRule(): NativeRuleContext {
		let localctx: NativeRuleContext = new NativeRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JASS2Parser.RULE_nativeRule);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 98;
				this.match(JASS2Parser.CONSTANT);
				}
			}

			this.state = 101;
			this.match(JASS2Parser.NATIVE);
			this.state = 102;
			this.match(JASS2Parser.ID);
			this.state = 103;
			this.takes();
			this.state = 104;
			this.returnsRule();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_(): FunctionContext {
		let localctx: FunctionContext = new FunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, JASS2Parser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 106;
				this.match(JASS2Parser.CONSTANT);
				}
			}

			this.state = 109;
			this.match(JASS2Parser.FUNCTION);
			this.state = 110;
			this.match(JASS2Parser.ID);
			this.state = 111;
			this.takes();
			this.state = 112;
			this.returnsRule();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===20 || _la===50) {
				{
				{
				this.state = 113;
				this.variable();
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 807960736) !== 0)) {
				{
				{
				this.state = 119;
				this.stmt();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(JASS2Parser.ENDFUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JASS2Parser.RULE_stmt);
		let _la: number;
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				localctx = new StmtSetContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 127;
				this.match(JASS2Parser.SET);
				this.state = 128;
				this.match(JASS2Parser.ID);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===48) {
					{
					this.state = 129;
					this.setBrack();
					}
				}

				this.state = 132;
				this.match(JASS2Parser.EQ);
				this.state = 133;
				this.expr(0);
				}
				break;
			case 5:
			case 7:
				localctx = new StmtCallContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 134;
					this.match(JASS2Parser.DEBUG);
					}
				}

				this.state = 137;
				this.match(JASS2Parser.CALL);
				this.state = 138;
				this.match(JASS2Parser.ID);
				this.state = 139;
				this.match(JASS2Parser.LPAREN);
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 42139654) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3950593) !== 0)) {
					{
					this.state = 140;
					this.expr(0);
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===34) {
						{
						{
						this.state = 141;
						this.match(JASS2Parser.COMMA);
						this.state = 142;
						this.expr(0);
						}
						}
						this.state = 147;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 150;
				this.match(JASS2Parser.RPAREN);
				}
				break;
			case 28:
				localctx = new StmtReturnContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 151;
				this.match(JASS2Parser.RETURN);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 42139654) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3950593) !== 0)) {
					{
					this.state = 152;
					this.expr(0);
					}
				}

				}
				break;
			case 19:
				localctx = new StmtIfContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 155;
				this.match(JASS2Parser.IF);
				this.state = 156;
				this.expr(0);
				this.state = 157;
				this.match(JASS2Parser.THEN);
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 807960736) !== 0)) {
					{
					{
					this.state = 158;
					this.stmt();
					}
					}
					this.state = 163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 164;
					this.elseif();
					}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 170;
					this.elseRule();
					}
				}

				this.state = 173;
				this.match(JASS2Parser.ENDIF);
				}
				break;
			case 21:
				localctx = new StmtLoopContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 175;
				this.match(JASS2Parser.LOOP);
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 807960736) !== 0)) {
					{
					{
					this.state = 176;
					this.stmt();
					}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 182;
				this.match(JASS2Parser.ENDLOOP);
				}
				break;
			case 15:
				localctx = new StmtExitWhenContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 183;
				this.match(JASS2Parser.EXITWHEN);
				this.state = 184;
				this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setBrack(): SetBrackContext {
		let localctx: SetBrackContext = new SetBrackContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, JASS2Parser.RULE_setBrack);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.match(JASS2Parser.LBRACK);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 42139654) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3950593) !== 0)) {
				{
				this.state = 188;
				this.expr(0);
				}
			}

			this.state = 191;
			this.match(JASS2Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseif(): ElseifContext {
		let localctx: ElseifContext = new ElseifContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, JASS2Parser.RULE_elseif);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this.match(JASS2Parser.ELSEIF);
			this.state = 194;
			this.expr(0);
			this.state = 195;
			this.match(JASS2Parser.THEN);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 807960736) !== 0)) {
				{
				{
				this.state = 196;
				this.stmt();
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseRule(): ElseRuleContext {
		let localctx: ElseRuleContext = new ElseRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, JASS2Parser.RULE_elseRule);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this.match(JASS2Parser.ELSE);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 807960736) !== 0)) {
				{
				{
				this.state = 203;
				this.stmt();
				}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 32;
		this.enterRecursionRule(localctx, 32, JASS2Parser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				localctx = new ExprParenContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 210;
				this.match(JASS2Parser.LPAREN);
				this.state = 211;
				this.expr(0);
				this.state = 212;
				this.match(JASS2Parser.RPAREN);
				}
				break;
			case 2:
				{
				localctx = new ExprUnContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 214;
				_la = this._input.LA(1);
				if(!(_la===23 || _la===43)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 215;
				this.expr(15);
				}
				break;
			case 3:
				{
				localctx = new ExprNullContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 216;
				this.match(JASS2Parser.NULL);
				}
				break;
			case 4:
				{
				localctx = new ExprBoolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 217;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===32)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 5:
				{
				localctx = new ExprIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 218;
				_la = this._input.LA(1);
				if(!(_la===1 || _la===51 || _la===52)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 6:
				{
				localctx = new ExprRealContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 219;
				this.match(JASS2Parser.REALVAL);
				}
				break;
			case 7:
				{
				localctx = new ExprStrContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 220;
				this.match(JASS2Parser.STRING);
				}
				break;
			case 8:
				{
				localctx = new ExprArrContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 221;
				this.match(JASS2Parser.ID);
				this.state = 222;
				this.match(JASS2Parser.LBRACK);
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 42139654) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3950593) !== 0)) {
					{
					this.state = 223;
					this.expr(0);
					}
				}

				this.state = 226;
				this.match(JASS2Parser.RBRACK);
				}
				break;
			case 9:
				{
				localctx = new ExprCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 227;
				this.match(JASS2Parser.ID);
				this.state = 228;
				this.match(JASS2Parser.LPAREN);
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 42139654) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3950593) !== 0)) {
					{
					this.state = 229;
					this.expr(0);
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===34) {
						{
						{
						this.state = 230;
						this.match(JASS2Parser.COMMA);
						this.state = 231;
						this.expr(0);
						}
						}
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 239;
				this.match(JASS2Parser.RPAREN);
				}
				break;
			case 10:
				{
				localctx = new ExprFunContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 240;
				this.match(JASS2Parser.FUNCTION);
				this.state = 241;
				this.match(JASS2Parser.ID);
				}
				break;
			case 11:
				{
				localctx = new ExprVarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 242;
				this.match(JASS2Parser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 262;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 260;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						localctx = new ExprMulContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JASS2Parser.RULE_expr);
						this.state = 245;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 246;
						_la = this._input.LA(1);
						if(!(_la===44 || _la===45)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 247;
						this.expr(15);
						}
						break;
					case 2:
						{
						localctx = new ExprAddContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JASS2Parser.RULE_expr);
						this.state = 248;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 249;
						_la = this._input.LA(1);
						if(!(_la===42 || _la===43)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 250;
						this.expr(14);
						}
						break;
					case 3:
						{
						localctx = new ExprLtContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JASS2Parser.RULE_expr);
						this.state = 251;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 252;
						_la = this._input.LA(1);
						if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 253;
						this.expr(13);
						}
						break;
					case 4:
						{
						localctx = new ExprEqContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JASS2Parser.RULE_expr);
						this.state = 254;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 255;
						_la = this._input.LA(1);
						if(!(_la===35 || _la===37)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 256;
						this.expr(12);
						}
						break;
					case 5:
						{
						localctx = new ExprAndContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JASS2Parser.RULE_expr);
						this.state = 257;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 258;
						_la = this._input.LA(1);
						if(!(_la===3 || _la===26)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 259;
						this.expr(11);
						}
						break;
					}
					}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 16:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,56,266,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	1,0,1,0,1,0,5,0,39,8,0,10,0,12,0,42,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,
	1,3,1,3,1,4,1,4,1,4,1,5,1,5,5,5,59,8,5,10,5,12,5,62,9,5,1,5,1,5,1,6,3,6,
	67,8,6,1,6,3,6,70,8,6,1,6,1,6,3,6,74,8,6,1,6,1,6,1,6,3,6,79,8,6,1,7,1,7,
	1,7,1,8,1,8,1,8,1,8,1,8,5,8,89,8,8,10,8,12,8,92,9,8,3,8,94,8,8,1,9,1,9,
	1,9,1,10,3,10,100,8,10,1,10,1,10,1,10,1,10,1,10,1,11,3,11,108,8,11,1,11,
	1,11,1,11,1,11,1,11,5,11,115,8,11,10,11,12,11,118,9,11,1,11,5,11,121,8,
	11,10,11,12,11,124,9,11,1,11,1,11,1,12,1,12,1,12,3,12,131,8,12,1,12,1,12,
	1,12,3,12,136,8,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,144,8,12,10,12,12,
	12,147,9,12,3,12,149,8,12,1,12,1,12,1,12,3,12,154,8,12,1,12,1,12,1,12,1,
	12,5,12,160,8,12,10,12,12,12,163,9,12,1,12,5,12,166,8,12,10,12,12,12,169,
	9,12,1,12,3,12,172,8,12,1,12,1,12,1,12,1,12,5,12,178,8,12,10,12,12,12,181,
	9,12,1,12,1,12,1,12,3,12,186,8,12,1,13,1,13,3,13,190,8,13,1,13,1,13,1,14,
	1,14,1,14,1,14,5,14,198,8,14,10,14,12,14,201,9,14,1,15,1,15,5,15,205,8,
	15,10,15,12,15,208,9,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
	16,1,16,1,16,1,16,1,16,1,16,3,16,225,8,16,1,16,1,16,1,16,1,16,1,16,1,16,
	5,16,233,8,16,10,16,12,16,236,9,16,3,16,238,8,16,1,16,1,16,1,16,1,16,3,
	16,244,8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	1,16,1,16,1,16,5,16,261,8,16,10,16,12,16,264,9,16,1,16,0,1,32,17,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,9,2,0,24,24,50,50,2,0,23,23,43,
	43,2,0,16,16,32,32,2,0,1,1,51,52,1,0,44,45,1,0,42,43,1,0,38,41,2,0,35,35,
	37,37,2,0,3,3,26,26,298,0,40,1,0,0,0,2,45,1,0,0,0,4,47,1,0,0,0,6,49,1,0,
	0,0,8,53,1,0,0,0,10,56,1,0,0,0,12,66,1,0,0,0,14,80,1,0,0,0,16,83,1,0,0,
	0,18,95,1,0,0,0,20,99,1,0,0,0,22,107,1,0,0,0,24,185,1,0,0,0,26,187,1,0,
	0,0,28,193,1,0,0,0,30,202,1,0,0,0,32,243,1,0,0,0,34,39,3,6,3,0,35,39,3,
	20,10,0,36,39,3,10,5,0,37,39,3,22,11,0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,
	1,0,0,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,
	0,0,0,42,40,1,0,0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,46,5,50,0,0,46,3,1,0,
	0,0,47,48,5,50,0,0,48,5,1,0,0,0,49,50,5,33,0,0,50,51,5,50,0,0,51,52,3,8,
	4,0,52,7,1,0,0,0,53,54,5,14,0,0,54,55,5,50,0,0,55,9,1,0,0,0,56,60,5,18,
	0,0,57,59,3,12,6,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,
	0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,64,5,13,0,0,64,11,1,0,0,0,65,67,5,6,
	0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,70,5,20,0,0,69,68,1,0,
	0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,73,3,2,1,0,72,74,5,4,0,0,73,72,1,0,0,
	0,73,74,1,0,0,0,74,75,1,0,0,0,75,78,3,4,2,0,76,77,5,36,0,0,77,79,3,32,16,
	0,78,76,1,0,0,0,78,79,1,0,0,0,79,13,1,0,0,0,80,81,3,2,1,0,81,82,3,4,2,0,
	82,15,1,0,0,0,83,93,5,30,0,0,84,94,5,24,0,0,85,90,3,14,7,0,86,87,5,34,0,
	0,87,89,3,14,7,0,88,86,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,
	0,91,94,1,0,0,0,92,90,1,0,0,0,93,84,1,0,0,0,93,85,1,0,0,0,94,17,1,0,0,0,
	95,96,5,27,0,0,96,97,7,0,0,0,97,19,1,0,0,0,98,100,5,6,0,0,99,98,1,0,0,0,
	99,100,1,0,0,0,100,101,1,0,0,0,101,102,5,22,0,0,102,103,5,50,0,0,103,104,
	3,16,8,0,104,105,3,18,9,0,105,21,1,0,0,0,106,108,5,6,0,0,107,106,1,0,0,
	0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,5,17,0,0,110,111,5,50,0,0,111,
	112,3,16,8,0,112,116,3,18,9,0,113,115,3,12,6,0,114,113,1,0,0,0,115,118,
	1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,122,1,0,0,0,118,116,1,0,0,0,
	119,121,3,24,12,0,120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,
	1,0,0,0,123,125,1,0,0,0,124,122,1,0,0,0,125,126,5,10,0,0,126,23,1,0,0,0,
	127,128,5,29,0,0,128,130,5,50,0,0,129,131,3,26,13,0,130,129,1,0,0,0,130,
	131,1,0,0,0,131,132,1,0,0,0,132,133,5,36,0,0,133,186,3,32,16,0,134,136,
	5,7,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,5,0,0,
	138,139,5,50,0,0,139,148,5,46,0,0,140,145,3,32,16,0,141,142,5,34,0,0,142,
	144,3,32,16,0,143,141,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,
	0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,148,140,1,0,0,0,148,149,1,0,0,0,149,
	150,1,0,0,0,150,186,5,47,0,0,151,153,5,28,0,0,152,154,3,32,16,0,153,152,
	1,0,0,0,153,154,1,0,0,0,154,186,1,0,0,0,155,156,5,19,0,0,156,157,3,32,16,
	0,157,161,5,31,0,0,158,160,3,24,12,0,159,158,1,0,0,0,160,163,1,0,0,0,161,
	159,1,0,0,0,161,162,1,0,0,0,162,167,1,0,0,0,163,161,1,0,0,0,164,166,3,28,
	14,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,
	171,1,0,0,0,169,167,1,0,0,0,170,172,3,30,15,0,171,170,1,0,0,0,171,172,1,
	0,0,0,172,173,1,0,0,0,173,174,5,11,0,0,174,186,1,0,0,0,175,179,5,21,0,0,
	176,178,3,24,12,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,
	1,0,0,0,180,182,1,0,0,0,181,179,1,0,0,0,182,186,5,12,0,0,183,184,5,15,0,
	0,184,186,3,32,16,0,185,127,1,0,0,0,185,135,1,0,0,0,185,151,1,0,0,0,185,
	155,1,0,0,0,185,175,1,0,0,0,185,183,1,0,0,0,186,25,1,0,0,0,187,189,5,48,
	0,0,188,190,3,32,16,0,189,188,1,0,0,0,189,190,1,0,0,0,190,191,1,0,0,0,191,
	192,5,49,0,0,192,27,1,0,0,0,193,194,5,9,0,0,194,195,3,32,16,0,195,199,5,
	31,0,0,196,198,3,24,12,0,197,196,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,
	0,199,200,1,0,0,0,200,29,1,0,0,0,201,199,1,0,0,0,202,206,5,8,0,0,203,205,
	3,24,12,0,204,203,1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,
	0,207,31,1,0,0,0,208,206,1,0,0,0,209,210,6,16,-1,0,210,211,5,46,0,0,211,
	212,3,32,16,0,212,213,5,47,0,0,213,244,1,0,0,0,214,215,7,1,0,0,215,244,
	3,32,16,15,216,244,5,25,0,0,217,244,7,2,0,0,218,244,7,3,0,0,219,244,5,53,
	0,0,220,244,5,2,0,0,221,222,5,50,0,0,222,224,5,48,0,0,223,225,3,32,16,0,
	224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,244,5,49,0,0,227,228,
	5,50,0,0,228,237,5,46,0,0,229,234,3,32,16,0,230,231,5,34,0,0,231,233,3,
	32,16,0,232,230,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,
	235,238,1,0,0,0,236,234,1,0,0,0,237,229,1,0,0,0,237,238,1,0,0,0,238,239,
	1,0,0,0,239,244,5,47,0,0,240,241,5,17,0,0,241,244,5,50,0,0,242,244,5,50,
	0,0,243,209,1,0,0,0,243,214,1,0,0,0,243,216,1,0,0,0,243,217,1,0,0,0,243,
	218,1,0,0,0,243,219,1,0,0,0,243,220,1,0,0,0,243,221,1,0,0,0,243,227,1,0,
	0,0,243,240,1,0,0,0,243,242,1,0,0,0,244,262,1,0,0,0,245,246,10,14,0,0,246,
	247,7,4,0,0,247,261,3,32,16,15,248,249,10,13,0,0,249,250,7,5,0,0,250,261,
	3,32,16,14,251,252,10,12,0,0,252,253,7,6,0,0,253,261,3,32,16,13,254,255,
	10,11,0,0,255,256,7,7,0,0,256,261,3,32,16,12,257,258,10,10,0,0,258,259,
	7,8,0,0,259,261,3,32,16,11,260,245,1,0,0,0,260,248,1,0,0,0,260,251,1,0,
	0,0,260,254,1,0,0,0,260,257,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,
	263,1,0,0,0,263,33,1,0,0,0,264,262,1,0,0,0,32,38,40,60,66,69,73,78,90,93,
	99,107,116,122,130,135,145,148,153,161,167,171,179,185,189,199,206,224,
	234,237,243,260,262];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JASS2Parser.__ATN) {
			JASS2Parser.__ATN = new ATNDeserializer().deserialize(JASS2Parser._serializedATN);
		}

		return JASS2Parser.__ATN;
	}


	static DecisionsToDFA = JASS2Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(JASS2Parser.EOF, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public nativeRule_list(): NativeRuleContext[] {
		return this.getTypedRuleContexts(NativeRuleContext) as NativeRuleContext[];
	}
	public nativeRule(i: number): NativeRuleContext {
		return this.getTypedRuleContext(NativeRuleContext, i) as NativeRuleContext;
	}
	public globals_list(): GlobalsContext[] {
		return this.getTypedRuleContexts(GlobalsContext) as GlobalsContext[];
	}
	public globals(i: number): GlobalsContext {
		return this.getTypedRuleContext(GlobalsContext, i) as GlobalsContext;
	}
	public function__list(): FunctionContext[] {
		return this.getTypedRuleContexts(FunctionContext) as FunctionContext[];
	}
	public function_(i: number): FunctionContext {
		return this.getTypedRuleContext(FunctionContext, i) as FunctionContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_root;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
}


export class TypenameContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_typename;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterTypename) {
	 		listener.enterTypename(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitTypename) {
	 		listener.exitTypename(this);
		}
	}
}


export class VarnameContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_varname;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterVarname) {
	 		listener.enterVarname(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitVarname) {
	 		listener.exitVarname(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE(): TerminalNode {
		return this.getToken(JASS2Parser.TYPE, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public extendsRule(): ExtendsRuleContext {
		return this.getTypedRuleContext(ExtendsRuleContext, 0) as ExtendsRuleContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_type;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
}


export class ExtendsRuleContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(JASS2Parser.EXTENDS, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_extendsRule;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExtendsRule) {
	 		listener.enterExtendsRule(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExtendsRule) {
	 		listener.exitExtendsRule(this);
		}
	}
}


export class GlobalsContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GLOBALS(): TerminalNode {
		return this.getToken(JASS2Parser.GLOBALS, 0);
	}
	public ENDGLOBALS(): TerminalNode {
		return this.getToken(JASS2Parser.ENDGLOBALS, 0);
	}
	public variable_list(): VariableContext[] {
		return this.getTypedRuleContexts(VariableContext) as VariableContext[];
	}
	public variable(i: number): VariableContext {
		return this.getTypedRuleContext(VariableContext, i) as VariableContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_globals;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterGlobals) {
	 		listener.enterGlobals(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitGlobals) {
	 		listener.exitGlobals(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public varname(): VarnameContext {
		return this.getTypedRuleContext(VarnameContext, 0) as VarnameContext;
	}
	public CONSTANT(): TerminalNode {
		return this.getToken(JASS2Parser.CONSTANT, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(JASS2Parser.LOCAL, 0);
	}
	public ARRAY(): TerminalNode {
		return this.getToken(JASS2Parser.ARRAY, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(JASS2Parser.EQ, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_variable;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public varname(): VarnameContext {
		return this.getTypedRuleContext(VarnameContext, 0) as VarnameContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_param;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterParam) {
	 		listener.enterParam(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitParam) {
	 		listener.exitParam(this);
		}
	}
}


export class TakesContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TAKES(): TerminalNode {
		return this.getToken(JASS2Parser.TAKES, 0);
	}
	public NOTHING(): TerminalNode {
		return this.getToken(JASS2Parser.NOTHING, 0);
	}
	public param_list(): ParamContext[] {
		return this.getTypedRuleContexts(ParamContext) as ParamContext[];
	}
	public param(i: number): ParamContext {
		return this.getTypedRuleContext(ParamContext, i) as ParamContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JASS2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JASS2Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_takes;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterTakes) {
	 		listener.enterTakes(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitTakes) {
	 		listener.exitTakes(this);
		}
	}
}


export class ReturnsRuleContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURNS(): TerminalNode {
		return this.getToken(JASS2Parser.RETURNS, 0);
	}
	public NOTHING(): TerminalNode {
		return this.getToken(JASS2Parser.NOTHING, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_returnsRule;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterReturnsRule) {
	 		listener.enterReturnsRule(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitReturnsRule) {
	 		listener.exitReturnsRule(this);
		}
	}
}


export class NativeRuleContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(JASS2Parser.NATIVE, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public takes(): TakesContext {
		return this.getTypedRuleContext(TakesContext, 0) as TakesContext;
	}
	public returnsRule(): ReturnsRuleContext {
		return this.getTypedRuleContext(ReturnsRuleContext, 0) as ReturnsRuleContext;
	}
	public CONSTANT(): TerminalNode {
		return this.getToken(JASS2Parser.CONSTANT, 0);
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_nativeRule;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterNativeRule) {
	 		listener.enterNativeRule(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitNativeRule) {
	 		listener.exitNativeRule(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(JASS2Parser.FUNCTION, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public takes(): TakesContext {
		return this.getTypedRuleContext(TakesContext, 0) as TakesContext;
	}
	public returnsRule(): ReturnsRuleContext {
		return this.getTypedRuleContext(ReturnsRuleContext, 0) as ReturnsRuleContext;
	}
	public ENDFUNCTION(): TerminalNode {
		return this.getToken(JASS2Parser.ENDFUNCTION, 0);
	}
	public CONSTANT(): TerminalNode {
		return this.getToken(JASS2Parser.CONSTANT, 0);
	}
	public variable_list(): VariableContext[] {
		return this.getTypedRuleContexts(VariableContext) as VariableContext[];
	}
	public variable(i: number): VariableContext {
		return this.getTypedRuleContext(VariableContext, i) as VariableContext;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_function;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterFunction) {
	 		listener.enterFunction(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitFunction) {
	 		listener.exitFunction(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_stmt;
	}
	public override copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class StmtIfContext extends StmtContext {
	constructor(parser: JASS2Parser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(JASS2Parser.IF, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(JASS2Parser.THEN, 0);
	}
	public ENDIF(): TerminalNode {
		return this.getToken(JASS2Parser.ENDIF, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
	public elseif_list(): ElseifContext[] {
		return this.getTypedRuleContexts(ElseifContext) as ElseifContext[];
	}
	public elseif(i: number): ElseifContext {
		return this.getTypedRuleContext(ElseifContext, i) as ElseifContext;
	}
	public elseRule(): ElseRuleContext {
		return this.getTypedRuleContext(ElseRuleContext, 0) as ElseRuleContext;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterStmtIf) {
	 		listener.enterStmtIf(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitStmtIf) {
	 		listener.exitStmtIf(this);
		}
	}
}
export class StmtCallContext extends StmtContext {
	constructor(parser: JASS2Parser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CALL(): TerminalNode {
		return this.getToken(JASS2Parser.CALL, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JASS2Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JASS2Parser.RPAREN, 0);
	}
	public DEBUG(): TerminalNode {
		return this.getToken(JASS2Parser.DEBUG, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JASS2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JASS2Parser.COMMA, i);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterStmtCall) {
	 		listener.enterStmtCall(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitStmtCall) {
	 		listener.exitStmtCall(this);
		}
	}
}
export class StmtExitWhenContext extends StmtContext {
	constructor(parser: JASS2Parser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXITWHEN(): TerminalNode {
		return this.getToken(JASS2Parser.EXITWHEN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterStmtExitWhen) {
	 		listener.enterStmtExitWhen(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitStmtExitWhen) {
	 		listener.exitStmtExitWhen(this);
		}
	}
}
export class StmtLoopContext extends StmtContext {
	constructor(parser: JASS2Parser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LOOP(): TerminalNode {
		return this.getToken(JASS2Parser.LOOP, 0);
	}
	public ENDLOOP(): TerminalNode {
		return this.getToken(JASS2Parser.ENDLOOP, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterStmtLoop) {
	 		listener.enterStmtLoop(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitStmtLoop) {
	 		listener.exitStmtLoop(this);
		}
	}
}
export class StmtSetContext extends StmtContext {
	constructor(parser: JASS2Parser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SET(): TerminalNode {
		return this.getToken(JASS2Parser.SET, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(JASS2Parser.EQ, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public setBrack(): SetBrackContext {
		return this.getTypedRuleContext(SetBrackContext, 0) as SetBrackContext;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterStmtSet) {
	 		listener.enterStmtSet(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitStmtSet) {
	 		listener.exitStmtSet(this);
		}
	}
}
export class StmtReturnContext extends StmtContext {
	constructor(parser: JASS2Parser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(JASS2Parser.RETURN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterStmtReturn) {
	 		listener.enterStmtReturn(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitStmtReturn) {
	 		listener.exitStmtReturn(this);
		}
	}
}


export class SetBrackContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(JASS2Parser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(JASS2Parser.RBRACK, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_setBrack;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterSetBrack) {
	 		listener.enterSetBrack(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitSetBrack) {
	 		listener.exitSetBrack(this);
		}
	}
}


export class ElseifContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSEIF(): TerminalNode {
		return this.getToken(JASS2Parser.ELSEIF, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(JASS2Parser.THEN, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_elseif;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterElseif) {
	 		listener.enterElseif(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitElseif) {
	 		listener.exitElseif(this);
		}
	}
}


export class ElseRuleContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(JASS2Parser.ELSE, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_elseRule;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterElseRule) {
	 		listener.enterElseRule(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitElseRule) {
	 		listener.exitElseRule(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: JASS2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JASS2Parser.RULE_expr;
	}
	public override copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprIntContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTVAL(): TerminalNode {
		return this.getToken(JASS2Parser.INTVAL, 0);
	}
	public HEXVAL(): TerminalNode {
		return this.getToken(JASS2Parser.HEXVAL, 0);
	}
	public RAWVAL(): TerminalNode {
		return this.getToken(JASS2Parser.RAWVAL, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprInt) {
	 		listener.enterExprInt(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprInt) {
	 		listener.exitExprInt(this);
		}
	}
}
export class ExprStrContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(JASS2Parser.STRING, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprStr) {
	 		listener.enterExprStr(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprStr) {
	 		listener.exitExprStr(this);
		}
	}
}
export class ExprUnContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(JASS2Parser.MINUS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(JASS2Parser.NOT, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprUn) {
	 		listener.enterExprUn(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprUn) {
	 		listener.exitExprUn(this);
		}
	}
}
export class ExprVarContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprVar) {
	 		listener.enterExprVar(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprVar) {
	 		listener.exitExprVar(this);
		}
	}
}
export class ExprEqContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public EQ_EQ(): TerminalNode {
		return this.getToken(JASS2Parser.EQ_EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(JASS2Parser.NEQ, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprEq) {
	 		listener.enterExprEq(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprEq) {
	 		listener.exitExprEq(this);
		}
	}
}
export class ExprNullContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL(): TerminalNode {
		return this.getToken(JASS2Parser.NULL, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprNull) {
	 		listener.enterExprNull(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprNull) {
	 		listener.exitExprNull(this);
		}
	}
}
export class ExprFunContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(JASS2Parser.FUNCTION, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprFun) {
	 		listener.enterExprFun(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprFun) {
	 		listener.exitExprFun(this);
		}
	}
}
export class ExprParenContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JASS2Parser.LPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JASS2Parser.RPAREN, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprParen) {
	 		listener.enterExprParen(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprParen) {
	 		listener.exitExprParen(this);
		}
	}
}
export class ExprCallContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(JASS2Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(JASS2Parser.RPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(JASS2Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(JASS2Parser.COMMA, i);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprCall) {
	 		listener.enterExprCall(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprCall) {
	 		listener.exitExprCall(this);
		}
	}
}
export class ExprLtContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public LT(): TerminalNode {
		return this.getToken(JASS2Parser.LT, 0);
	}
	public LT_EQ(): TerminalNode {
		return this.getToken(JASS2Parser.LT_EQ, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(JASS2Parser.GT, 0);
	}
	public GT_EQ(): TerminalNode {
		return this.getToken(JASS2Parser.GT_EQ, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprLt) {
	 		listener.enterExprLt(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprLt) {
	 		listener.exitExprLt(this);
		}
	}
}
export class ExprMulContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(JASS2Parser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(JASS2Parser.DIV, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprMul) {
	 		listener.enterExprMul(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprMul) {
	 		listener.exitExprMul(this);
		}
	}
}
export class ExprArrContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(JASS2Parser.ID, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(JASS2Parser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(JASS2Parser.RBRACK, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprArr) {
	 		listener.enterExprArr(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprArr) {
	 		listener.exitExprArr(this);
		}
	}
}
export class ExprAddContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(JASS2Parser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(JASS2Parser.PLUS, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprAdd) {
	 		listener.enterExprAdd(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprAdd) {
	 		listener.exitExprAdd(this);
		}
	}
}
export class ExprBoolContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUE(): TerminalNode {
		return this.getToken(JASS2Parser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(JASS2Parser.FALSE, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprBool) {
	 		listener.enterExprBool(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprBool) {
	 		listener.exitExprBool(this);
		}
	}
}
export class ExprAndContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public AND(): TerminalNode {
		return this.getToken(JASS2Parser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(JASS2Parser.OR, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprAnd) {
	 		listener.enterExprAnd(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprAnd) {
	 		listener.exitExprAnd(this);
		}
	}
}
export class ExprRealContext extends ExprContext {
	constructor(parser: JASS2Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REALVAL(): TerminalNode {
		return this.getToken(JASS2Parser.REALVAL, 0);
	}
	public enterRule(listener: JASS2Listener): void {
	    if(listener.enterExprReal) {
	 		listener.enterExprReal(this);
		}
	}
	public exitRule(listener: JASS2Listener): void {
	    if(listener.exitExprReal) {
	 		listener.exitExprReal(this);
		}
	}
}
