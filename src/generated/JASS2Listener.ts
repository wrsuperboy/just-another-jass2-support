// Generated from src/JASS2.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { RootContext } from "./JASS2Parser.js";
import { TypenameContext } from "./JASS2Parser.js";
import { VarnameContext } from "./JASS2Parser.js";
import { TypeContext } from "./JASS2Parser.js";
import { ExtendsRuleContext } from "./JASS2Parser.js";
import { GlobalsContext } from "./JASS2Parser.js";
import { VariableContext } from "./JASS2Parser.js";
import { ParamContext } from "./JASS2Parser.js";
import { TakesContext } from "./JASS2Parser.js";
import { ReturnsRuleContext } from "./JASS2Parser.js";
import { NativeRuleContext } from "./JASS2Parser.js";
import { FunctionContext } from "./JASS2Parser.js";
import { StmtSetContext } from "./JASS2Parser.js";
import { StmtCallContext } from "./JASS2Parser.js";
import { StmtReturnContext } from "./JASS2Parser.js";
import { StmtIfContext } from "./JASS2Parser.js";
import { StmtLoopContext } from "./JASS2Parser.js";
import { StmtExitWhenContext } from "./JASS2Parser.js";
import { SetBrackContext } from "./JASS2Parser.js";
import { ElseifContext } from "./JASS2Parser.js";
import { ElseRuleContext } from "./JASS2Parser.js";
import { ExprIntContext } from "./JASS2Parser.js";
import { ExprStrContext } from "./JASS2Parser.js";
import { ExprUnContext } from "./JASS2Parser.js";
import { ExprVarContext } from "./JASS2Parser.js";
import { ExprEqContext } from "./JASS2Parser.js";
import { ExprNullContext } from "./JASS2Parser.js";
import { ExprFunContext } from "./JASS2Parser.js";
import { ExprParenContext } from "./JASS2Parser.js";
import { ExprCallContext } from "./JASS2Parser.js";
import { ExprLtContext } from "./JASS2Parser.js";
import { ExprMulContext } from "./JASS2Parser.js";
import { ExprArrContext } from "./JASS2Parser.js";
import { ExprAddContext } from "./JASS2Parser.js";
import { ExprBoolContext } from "./JASS2Parser.js";
import { ExprAndContext } from "./JASS2Parser.js";
import { ExprRealContext } from "./JASS2Parser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JASS2Parser`.
 */
export default class JASS2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JASS2Parser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.typename`.
	 * @param ctx the parse tree
	 */
	enterTypename?: (ctx: TypenameContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.typename`.
	 * @param ctx the parse tree
	 */
	exitTypename?: (ctx: TypenameContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.varname`.
	 * @param ctx the parse tree
	 */
	enterVarname?: (ctx: VarnameContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.varname`.
	 * @param ctx the parse tree
	 */
	exitVarname?: (ctx: VarnameContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.extendsRule`.
	 * @param ctx the parse tree
	 */
	enterExtendsRule?: (ctx: ExtendsRuleContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.extendsRule`.
	 * @param ctx the parse tree
	 */
	exitExtendsRule?: (ctx: ExtendsRuleContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.globals`.
	 * @param ctx the parse tree
	 */
	enterGlobals?: (ctx: GlobalsContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.globals`.
	 * @param ctx the parse tree
	 */
	exitGlobals?: (ctx: GlobalsContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.takes`.
	 * @param ctx the parse tree
	 */
	enterTakes?: (ctx: TakesContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.takes`.
	 * @param ctx the parse tree
	 */
	exitTakes?: (ctx: TakesContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.returnsRule`.
	 * @param ctx the parse tree
	 */
	enterReturnsRule?: (ctx: ReturnsRuleContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.returnsRule`.
	 * @param ctx the parse tree
	 */
	exitReturnsRule?: (ctx: ReturnsRuleContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.nativeRule`.
	 * @param ctx the parse tree
	 */
	enterNativeRule?: (ctx: NativeRuleContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.nativeRule`.
	 * @param ctx the parse tree
	 */
	exitNativeRule?: (ctx: NativeRuleContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;
	/**
	 * Enter a parse tree produced by the `stmtSet`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtSet?: (ctx: StmtSetContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtSet`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtSet?: (ctx: StmtSetContext) => void;
	/**
	 * Enter a parse tree produced by the `stmtCall`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtCall?: (ctx: StmtCallContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtCall`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtCall?: (ctx: StmtCallContext) => void;
	/**
	 * Enter a parse tree produced by the `stmtReturn`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtReturn?: (ctx: StmtReturnContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtReturn`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtReturn?: (ctx: StmtReturnContext) => void;
	/**
	 * Enter a parse tree produced by the `stmtIf`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtIf?: (ctx: StmtIfContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtIf`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtIf?: (ctx: StmtIfContext) => void;
	/**
	 * Enter a parse tree produced by the `stmtLoop`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtLoop?: (ctx: StmtLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtLoop`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtLoop?: (ctx: StmtLoopContext) => void;
	/**
	 * Enter a parse tree produced by the `stmtExitWhen`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtExitWhen?: (ctx: StmtExitWhenContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtExitWhen`
	 * labeled alternative in `JASS2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtExitWhen?: (ctx: StmtExitWhenContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.setBrack`.
	 * @param ctx the parse tree
	 */
	enterSetBrack?: (ctx: SetBrackContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.setBrack`.
	 * @param ctx the parse tree
	 */
	exitSetBrack?: (ctx: SetBrackContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.elseif`.
	 * @param ctx the parse tree
	 */
	enterElseif?: (ctx: ElseifContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.elseif`.
	 * @param ctx the parse tree
	 */
	exitElseif?: (ctx: ElseifContext) => void;
	/**
	 * Enter a parse tree produced by `JASS2Parser.elseRule`.
	 * @param ctx the parse tree
	 */
	enterElseRule?: (ctx: ElseRuleContext) => void;
	/**
	 * Exit a parse tree produced by `JASS2Parser.elseRule`.
	 * @param ctx the parse tree
	 */
	exitElseRule?: (ctx: ElseRuleContext) => void;
	/**
	 * Enter a parse tree produced by the `exprInt`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprInt?: (ctx: ExprIntContext) => void;
	/**
	 * Exit a parse tree produced by the `exprInt`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprInt?: (ctx: ExprIntContext) => void;
	/**
	 * Enter a parse tree produced by the `exprStr`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprStr?: (ctx: ExprStrContext) => void;
	/**
	 * Exit a parse tree produced by the `exprStr`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprStr?: (ctx: ExprStrContext) => void;
	/**
	 * Enter a parse tree produced by the `exprUn`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprUn?: (ctx: ExprUnContext) => void;
	/**
	 * Exit a parse tree produced by the `exprUn`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprUn?: (ctx: ExprUnContext) => void;
	/**
	 * Enter a parse tree produced by the `exprVar`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprVar?: (ctx: ExprVarContext) => void;
	/**
	 * Exit a parse tree produced by the `exprVar`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprVar?: (ctx: ExprVarContext) => void;
	/**
	 * Enter a parse tree produced by the `exprEq`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprEq?: (ctx: ExprEqContext) => void;
	/**
	 * Exit a parse tree produced by the `exprEq`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprEq?: (ctx: ExprEqContext) => void;
	/**
	 * Enter a parse tree produced by the `exprNull`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprNull?: (ctx: ExprNullContext) => void;
	/**
	 * Exit a parse tree produced by the `exprNull`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprNull?: (ctx: ExprNullContext) => void;
	/**
	 * Enter a parse tree produced by the `exprFun`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprFun?: (ctx: ExprFunContext) => void;
	/**
	 * Exit a parse tree produced by the `exprFun`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprFun?: (ctx: ExprFunContext) => void;
	/**
	 * Enter a parse tree produced by the `exprParen`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprParen?: (ctx: ExprParenContext) => void;
	/**
	 * Exit a parse tree produced by the `exprParen`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprParen?: (ctx: ExprParenContext) => void;
	/**
	 * Enter a parse tree produced by the `exprCall`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprCall?: (ctx: ExprCallContext) => void;
	/**
	 * Exit a parse tree produced by the `exprCall`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprCall?: (ctx: ExprCallContext) => void;
	/**
	 * Enter a parse tree produced by the `exprLt`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprLt?: (ctx: ExprLtContext) => void;
	/**
	 * Exit a parse tree produced by the `exprLt`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprLt?: (ctx: ExprLtContext) => void;
	/**
	 * Enter a parse tree produced by the `exprMul`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprMul?: (ctx: ExprMulContext) => void;
	/**
	 * Exit a parse tree produced by the `exprMul`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprMul?: (ctx: ExprMulContext) => void;
	/**
	 * Enter a parse tree produced by the `exprArr`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprArr?: (ctx: ExprArrContext) => void;
	/**
	 * Exit a parse tree produced by the `exprArr`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprArr?: (ctx: ExprArrContext) => void;
	/**
	 * Enter a parse tree produced by the `exprAdd`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprAdd?: (ctx: ExprAddContext) => void;
	/**
	 * Exit a parse tree produced by the `exprAdd`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprAdd?: (ctx: ExprAddContext) => void;
	/**
	 * Enter a parse tree produced by the `exprBool`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprBool?: (ctx: ExprBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `exprBool`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprBool?: (ctx: ExprBoolContext) => void;
	/**
	 * Enter a parse tree produced by the `exprAnd`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprAnd?: (ctx: ExprAndContext) => void;
	/**
	 * Exit a parse tree produced by the `exprAnd`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprAnd?: (ctx: ExprAndContext) => void;
	/**
	 * Enter a parse tree produced by the `exprReal`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprReal?: (ctx: ExprRealContext) => void;
	/**
	 * Exit a parse tree produced by the `exprReal`
	 * labeled alternative in `JASS2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprReal?: (ctx: ExprRealContext) => void;
}

