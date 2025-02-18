import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentSyncKind,
  DefinitionParams,
  Position,
  Definition,
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
    definitionProvider: true,
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

connection.onDefinition((params: DefinitionParams) => {
  const document = documents.get(params.textDocument.uri);

  if (!document) {
    return null;
  }

  const position = params.position;
  const word = getWordAtPosition(document, position);
  const definition = findDefinition(document, word);

  if (definition) {
    return {
      uri: document.uri,
      range: {
        start: definition,
        end: Position.create(
          definition.line,
          definition.character + word.length
        ),
      },
    } as Definition;
  }

  return null;
});

function isWordCharacter(char: string): boolean {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9") ||
    char === "_"
  );
}

function getWordAtPosition(document: TextDocument, position: Position): string {
  const text = document.getText();
  const offset = document.offsetAt(position);

  // Find the start of the word
  let start = offset;
  while (start > 0 && isWordCharacter(text.charAt(start - 1))) {
    start--;
  }

  // Find the end of the word
  let end = offset;
  while (end < text.length && isWordCharacter(text.charAt(end))) {
    end++;
  }

  return text.substring(start, end);
}

function findDefinition(document: TextDocument, word: string): Position | null {
  const text = document.getText();
  const regex = new RegExp(`(function\\s+)${word}\\s+takes`);
  const match = regex.exec(text);

  if (match) {
    const index = match.index + match[1].length;
    return document.positionAt(index);
  }

  return null;
}

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
