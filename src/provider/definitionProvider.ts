import * as vscode from "vscode";

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
        const regex = new RegExp(`(^function[ \\t]+)${word}[ \\t]+takes`);
        const match = regex.exec(text);
    
        if (match) {
          const index = match.index + match[1].length;
          const start = document.positionAt(index);
          const end = document.positionAt(index + word.length);
          return new vscode.Location(document.uri, new vscode.Range(start, end));
        }
    }

    return null;
  }
}

