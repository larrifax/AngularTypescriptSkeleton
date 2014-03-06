/// <reference path="../_Typings.ts" />

module App.Main {
    'use strict';

    export class MainModule extends App.Common.ModuleBase implements App.Common.IModule {
        constructor() {
            this.ID = "App.Main";
            super();
            this.wireFactories();
        }

        private wireFactories() {
            this.wire(App.Main.Controllers, this.instance.controller);
        }
    }
}