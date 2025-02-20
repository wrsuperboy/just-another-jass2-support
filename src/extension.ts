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
  Jass2SemanticTokenProvider,
  legend,
} from "./provider/semanticTokenProvider";
import { Jass2DeclarationProvider } from "./provider/declarationProvider";
import { Jass2DefinitionProvider } from "./provider/definitionProvider";

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
      new Jass2DefinitionProvider()
    )
  );

  context.subscriptions.push(
    vscode.languages.registerDeclarationProvider(
      { language: "jass2" },
      new Jass2DeclarationProvider()
    )
  );

  context.subscriptions.push(client);
  client.start();
}
