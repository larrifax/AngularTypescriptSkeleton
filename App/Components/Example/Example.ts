/// <reference path="../../_Typings.ts" />

module Components.Example {
    'use strict';

    export class Example extends App.Common.ModuleBase {
        static ID = "App.Example";

        constructor() {
            super();
            this.initializeModule(Example.ID);
            this.initializeDirectives(Components.Example.Directives);
        }
    }
}