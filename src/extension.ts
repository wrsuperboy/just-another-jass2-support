import * as vscode from "vscode";
import * as path from "path";
import * as cp from "child_process";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from "vscode-languageclient/node";

export function activate(context: vscode.ExtensionContext) {
  let serverModule = context.asAbsolutePath(path.join("target", "server.js"));
  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: { module: serverModule, transport: TransportKind.ipc }
  };

  let clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "jass2" }]
  };

  let client = new LanguageClient("jass2LanguageServer", "JASS Language Server", serverOptions, clientOptions);
  client.start().then(() => {
    context.subscriptions.push(client);
  });
}