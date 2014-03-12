/// <reference path="../../_Typings.ts" />

module Components.Example {
    'use strict';

    export class Example extends App.Common.ModuleBase {
        static ID = "Example";

        constructor() {
            super();
            this.initializeModule(Example.ID);
            this.initializeDirectives(Components.Example.Directives);
            this.initializeFilters(Components.Example.Filters);
        }
    }
}