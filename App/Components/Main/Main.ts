/// <reference path="../../_Typings.ts" />

module Components.Main {
    'use strict';

    export class Main extends App.Common.ModuleBase {
        static ID = "App.Main";

        constructor() {
            super();
            this.initializeModule(Main.ID, [Components.Common.Common.ID]);
            this.initializeControllers(Components.Main.Controllers);
        }
    }
}