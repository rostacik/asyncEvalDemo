module Functions {
    "use strict";

    export function someFn(): boolean {
        return true;
    }

    export function someDifferentFn(): number {
        return 9;
    }

    export function someReallyDifferentFn(): string {
        return "hello from sync function";
    }

    export async function someFnAsync(): Promise<boolean> {
        return true;
    }

    export async function someOtherFnAsync(): Promise<string> {
        return "hello from async function";
    }

    export async function someCompletelyOtherFnAsync(): Promise<number> {
        return 7;
    }
}