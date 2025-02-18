import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentSyncKind,
  DefinitionParams,
  Position,
  DefinitionLink,
  Definition,
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
  },
}));

connection.onCompletion(() =>
  keywords.map((keyword) => ({
    label: keyword,
    kind: CompletionItemKind.Keyword,
  } as CompletionItem)).concat(constants.map((constant) => ({
    label: constant,
    kind: CompletionItemKind.Constant,
  } as CompletionItem)))
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
        start: Position.create(definition.line, definition.character),
        end: Position.create(definition.line, definition.character + word.length),
      },
    } as Definition;
  }

  return null;
});

// Helper functions to get the word at the position and find its definition
function getWordAtPosition(document: TextDocument, position: Position): string {
  const text = document.getText();
  const offset = document.offsetAt(position);
  const start = text.lastIndexOf(' ', offset) + 1;
  const end = text.indexOf(' ', offset);
  return text.substring(start, end === -1 ? text.length : end);
}

function findDefinition(document: TextDocument, word: string): { line: number, character: number } | null {
  const text = document.getText();
  const regex = new RegExp(`function\\s+${word}\\s+takes`);
  const match = regex.exec(text);

  if (match) {
    const index = match.index;
    return { line: document.positionAt(index).line, character: index };
  }

  return null;
}

documents.listen(connection);
connection.listen();
