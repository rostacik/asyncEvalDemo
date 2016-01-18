/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

$(() => {
    "use strict";

    $("#btnClickMe").click(async () => {
        let jsCodeToRunName: string = $("#inpFnName").val();

        let syncVersion: () => void;
        let asyncVersion: any; //this should be async() => Promise<void>

        if (jsCodeToRunName) {
            //async branch
            if (jsCodeToRunName.endsWith("Async")) {
                asyncVersion = fw.getFunctionByName(jsCodeToRunName);

                if (asyncVersion) {
                    let res = await asyncVersion();
                    console.log(`async result from function with name ${jsCodeToRunName} was : ${res}`);
                } else {
                    console.log(`async object with name ${jsCodeToRunName} was not found`);
                }
            } else { //sync branch
                syncVersion = fw.getFunctionByName(jsCodeToRunName);

                if (syncVersion) {
                    let res = syncVersion();
                    console.log(`sync result from function with name ${jsCodeToRunName} was : ${res}`);
                } else {
                    console.log(`sync object with name ${jsCodeToRunName} was not found`);
                }
            }
        } else {
            console.log("no text input in input box - please specify name of function to run");
        }
    });
});