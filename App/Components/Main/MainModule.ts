/// <reference path="../../_Typings.ts" />

module Components.Main {
    'use strict';

    export class MainModule extends App.Common.ModuleBase implements App.Common.IModule {
        constructor() {
            this.ID = "App.Main";
            super();
            this.wireFactories();
        }

        private wireFactories() {
            this.wire(Components.Main.Controllers, this.instance.controller);
        }
    }
}