import * as path from "path";
import * as vscode from "vscode";
import { bJFunctionsDoNotEndWithBJ, cjFunctions } from "../language";

export class Jass2DefinitionProvider implements vscode.DefinitionProvider {
  provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Definition | vscode.DefinitionLink[]> {
    const wordRange = document.getWordRangeAtPosition(position);
    if (wordRange) {
      const word = document.getText(wordRange);

      const text = document.getText();
      const regex = new RegExp(`(function[ \\t]+)${word}[ \\t]+takes`);
      const match = regex.exec(text);

      if (match) {
        const index = match.index + match[1].length;
        const start = document.positionAt(index);
        const end = document.positionAt(index + word.length);
        return new vscode.Location(document.uri, new vscode.Range(start, end));
      } else {
        if (cjFunctions.has(word)) {
          return vscode.workspace
            .openTextDocument(
              path.join(__dirname, "..", "..", "lib", "common.j")
            )
            .then((document) => {
              const nativeRegex = new RegExp(
                `(native[ \\t]+)${word}[ \\t]+takes`
              );
              const nativeMatch = nativeRegex.exec(document.getText());
              if (nativeMatch) {
                const index = nativeMatch.index + nativeMatch[1].length;
                const start = document.positionAt(index);
                const end = document.positionAt(index + word.length);
                return new vscode.Location(
                  document.uri,
                  new vscode.Range(start, end)
                );
              }
              return null;
            });
        } else if (word.endsWith("BJ") || bJFunctionsDoNotEndWithBJ.has(word)) {
          return vscode.workspace
            .openTextDocument(
              path.join(__dirname, "..", "..", "lib", "blizzard.j")
            )
            .then((document) => {
              const bjRegex = new RegExp(
                `(function[ \\t]+)${word}[ \\t]+takes`
              );
              const bjMatch = bjRegex.exec(document.getText());
              if (bjMatch) {
                const index = bjMatch.index + bjMatch[1].length;
                const start = document.positionAt(index);
                const end = document.positionAt(index + word.length);
                return new vscode.Location(
                  document.uri,
                  new vscode.Range(start, end)
                );
              }
              return null;
            });
        }
      }
    }

    return null;
  }
}
