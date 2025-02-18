import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind,
  TextDocumentSyncKind,
} from "vscode-languageserver/node";

import { TextDocument } from "vscode-languageserver-textdocument";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

connection.onInitialize(() => ({
  capabilities: {
    textDocumentSync: TextDocumentSyncKind.Incremental,
    completionProvider: { resolveProvider: true },
  },
}));

// connection.onCompletion(() =>
//   keywords.map((keyword) => ({
//     label: keyword,
//     kind: CompletionItemKind.Keyword,
//   }))
// );

documents.listen(connection);
connection.listen();
