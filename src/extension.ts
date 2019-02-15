"use strict";
import * as vscode from "vscode";
import * as completion from "./features/completionItemProvider";

// import * as request from './request'

export function activate (context: vscode.ExtensionContext): void {
	console.log("CoDScript: Init");

	// register the built-in function definitions
	vscode.languages.registerCompletionItemProvider("gsc",
		new completion.FunctionProvider(context.extensionPath));
	vscode.languages.registerCompletionItemProvider("gsc",
		new completion.PropertyProvider(context.extensionPath), ".");
}

export function deactivate (): void {
	console.log("CoDScript: Free");
}
