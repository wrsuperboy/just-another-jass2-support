import * as vscode from "vscode";

export class Jass2DeclarationProvider implements vscode.DeclarationProvider {
  provideDeclaration(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Declaration> {
    const text = document.getText();
    const wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange) return null;

    const word = document.getText(wordRange);

    const declarationRegex = new RegExp(
      `^([ \\t]*(?:constant[ \\t]+)?(?:local[ \\t]+).*\\b)${word}\\b`
    );
    for (let i = position.line; i >= 0; i--) {
      const line = document.lineAt(i).text;

      if (token.isCancellationRequested) {
        return null;
      }

      if (/^[ \t]*function.*\btakes\b/.test(line)) {
        const paramRegex = new RegExp(
          `(\\btakes\\b.*\\b)${word}[ \\t]*(?:,|returns\\b)`
        );
        const paramMatch = paramRegex.exec(line);
        if (paramMatch) {
          return new vscode.Location(
            document.uri,
            new vscode.Position(i, paramMatch.index + paramMatch[1].length)
          );
        }
        break;
      }

      const declarationMatch = declarationRegex.exec(line);
      if (declarationMatch) {
        return new vscode.Location(
          document.uri,
          new vscode.Position(i, declarationMatch[1].length)
        );
      }
    }

    return null;
  }
}
