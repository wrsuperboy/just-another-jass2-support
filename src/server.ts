import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentSyncKind,
  Position,
  FoldingRange,
  FoldingRangeParams,
} from "vscode-languageserver/node";

import { TextDocument } from "vscode-languageserver-textdocument";
import { keywords, constants } from "./language";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

connection.onInitialize(() => ({
  capabilities: {
    textDocumentSync: TextDocumentSyncKind.Incremental,
    completionProvider: {},
    foldingRangeProvider: true,
  },
}));

connection.onCompletion(() =>
  keywords
    .map(
      (keyword) =>
        ({
          label: keyword,
          kind: CompletionItemKind.Keyword,
        } as CompletionItem)
    )
    .concat(
      constants.map(
        (constant) =>
          ({
            label: constant,
            kind: CompletionItemKind.Constant,
          } as CompletionItem)
      )
    )
);

connection.onFoldingRanges((params: FoldingRangeParams) => {
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return [];
  }

  const text = document.getText();
  const foldingRanges: FoldingRange[] = [];

  const globalRegex = /globals\b[\s\S]*?\bendglobals/g;
  const functionRegex = /function\b[\s\S]*?\bendfunction/g;

  let match;
  while ((match = globalRegex.exec(text)) !== null) {
    const start = document.positionAt(match.index);
    const end = document.positionAt(match.index + match[0].length);
    foldingRanges.push(FoldingRange.create(start.line, end.line - 1));
  }

  while ((match = functionRegex.exec(text)) !== null) {
    const start = document.positionAt(match.index);
    const end = document.positionAt(match.index + match[0].length);
    foldingRanges.push(FoldingRange.create(start.line, end.line - 1));
  }

  const ifRegex = /\b(if|elseif|else|endif)\b/g;
  const ifStack: {
    start: Position;
    type: "if" | "elseif" | "else" | "endif";
  }[] = [];
  while ((match = ifRegex.exec(text)) !== null) {
    const keyword = match[1];
    const position = document.positionAt(match.index);

    if (keyword === "if" || keyword === "elseif" || keyword === "else") {
      ifStack.push({ start: position, type: keyword });
    } else if (keyword === "endif") {
      let end = position;
      let last;
      while ((last = ifStack.pop())) {
        foldingRanges.push(FoldingRange.create(last.start.line, end.line - 1));
        end = last.start;
        if (last.type === "if") {
          break;
        }
      }
    }
  }

  const loopRegex = /\b(loop|endloop)\b/g;
  const loopStack: Position[] = [];
  while ((match = loopRegex.exec(text)) !== null) {
    const keyword = match[1];
    const position = document.positionAt(match.index);

    if (keyword === "loop") {
      loopStack.push(position);
    } else {
      let last = loopStack.pop();
      if (last) {
        foldingRanges.push(FoldingRange.create(last.line, position.line - 1));
      }
    }
  }

  return foldingRanges;
});

documents.listen(connection);
connection.listen();
