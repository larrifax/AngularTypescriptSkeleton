/// <reference path="../../_Typings.ts" />

module Components.Common {
    'use strict';

    export class Common extends App.Common.ModuleBase {
        constructor() {
            this.ID = "App.Common";
            super();
            this.wireFactories();
        }

        private wireFactories() {
            this.wire(Components.Common, this.instance.factory);
        }
    }
}