module fw {
    "use strict";

    export function getFunctionByName(functionName: string, context?: any): any {
        if (!context) {
            context = window;
        }

        let namespaces: Array<string> = functionName.split(".");
        let func: string = namespaces.pop();

        for (let i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }

        return context[func];
    }
}