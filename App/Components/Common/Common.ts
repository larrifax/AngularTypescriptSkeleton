/// <reference path="../../_Typings.ts" />

module Components.Common {
    'use strict';

    export class Common extends App.Common.ModuleBase {
        static ID = "App.Common";

        constructor() {
            super();
            this.initializeModule(Common.ID);
            this.initializeServices(Components.Common.Services);
        }
    }
}