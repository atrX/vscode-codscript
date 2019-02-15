"use strict";
import * as vscode from "vscode";

import * as funcDefs from "../defs/defs";
import * as fieldDefs from "../defs/field";

// provides function completion
export class FunctionProvider {
	functions: vscode.CompletionItem[];

	// generate completion items for the hardcoded functions
	constructor (extensionPath: string) {
		this.functions = new Array<vscode.CompletionItem>();

		for (let idef of funcDefs.defs) {
			let def: vscode.CompletionItem = new vscode.CompletionItem(idef.name);
			def.detail = idef.decl;
			def.documentation = idef.desc;
			def.kind = vscode.CompletionItemKind.Function;
			this.functions.push(def);
		}
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
		//
		// present the user with a list of common GSC / CSC functions
		//
		return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
			// dynamically resolved completion items
			let funcItems: vscode.CompletionItem[] = [];

			if (vscode.workspace.getConfiguration("vscode-codscript").get("use_builtin_completionItems", true)) {
				// fallback to just using the built-in completion items if no dynamic ones were found
				if (!funcItems.length) {
					resolve(this.functions);
				}

				resolve(this.functions.concat(funcItems));
			}

			// use the non-builtin results (current none)
			resolve(funcItems);
		});
	}
}

export class PropertyProvider {
	props: vscode.CompletionItem[];

	// generate completion items for the hardcoded functions
	constructor (extensionPath : string) {
		this.props = new Array<vscode.CompletionItem>();

		for (let fdef of fieldDefs.fields) {
			let def: vscode.CompletionItem = new vscode.CompletionItem(fdef.toString());
			def.kind = vscode.CompletionItemKind.Field;
			this.props.push(def);
		}
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {


		//
		// present the user with a list of common GSC / CSC functions
		//
		return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
			// don't provide completion unless it's enabled
			if (!vscode.workspace.getConfiguration("vscode-codscript").get("use_builtin_completionItems", true)) {
				reject();
			}

			// don't provide the property completionItems unless we were activated by the trigger character
			if (context.triggerKind !== vscode.CompletionTriggerKind.TriggerCharacter) {
				reject();
			}

			// dynamically resolved completion items
			let propItems: vscode.CompletionItem[] = [];
			if (propItems.length) {
				resolve(this.props.concat(propItems));
			}
			resolve(this.props);
		});
	}
}