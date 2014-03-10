/// <reference path="_Typings.ts" />

module App {
    'use strict';

    export class Application extends App.Common.ModuleBase {
        public ID: string;
        public dependencies: string[];
        public instance: ng.IModule;

        constructor() {
            super();
            this.dependencies = [];

            this.initializeLocalDependencies();
            this.initializeModule(App.Config.Configuration.Application_Namespace, this.dependencies);
        }

        private initializeLocalDependencies() {
            this.test(Components.Main.Main);
            this.test(Components.Common.Common);
        }

        private test(namespace: any) {
            var testing = new namespace();
            this.dependencies.push(namespace.ID);
        }
    }

    var application = new Application();
}