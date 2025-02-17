import {
    createConnection,
    TextDocuments,
    ProposedFeatures,
    CompletionItem,
    CompletionItemKind,
    TextDocumentSyncKind
  } from 'vscode-languageserver/node';

  import { TextDocument } from 'vscode-languageserver-textdocument';
  
  const connection = createConnection(ProposedFeatures.all);
  const documents = new TextDocuments(TextDocument);
  
  connection.onInitialize(() => ({
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: { resolveProvider: true }
    }
  }));
  
  connection.onCompletion(() => [
    { label: "function", kind: CompletionItemKind.Keyword },
    { label: "if", kind: CompletionItemKind.Keyword },
    { label: "loop", kind: CompletionItemKind.Keyword },
    { label: "return", kind: CompletionItemKind.Keyword }
  ]);
  
  documents.listen(connection);
  connection.listen();