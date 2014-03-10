/// <reference path="../../_Typings.ts" />

module Components.Main {
    'use strict';

    export class Main extends App.Common.ModuleBase {
        constructor() {
            this.ID = "App.Main";
            this.dependencies = ["App.Common"];
            super();
            this.wireFactories();
        }

        private wireFactories() {
            this.wire(Components.Main.Controllers, this.instance.controller);
        }
    }
}