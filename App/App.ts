/// <reference path="_Typings.ts" />

module App {
    'use strict';

    export class Application implements App.Common.IModule {
        public ID: string;
        public dependencies: string[];
        public instance: ng.IModule;

        constructor() {
            this.dependencies = [];

            this.initializeLocalDependencies();
            this.initializeInstance();
        }

        private initializeLocalDependencies() {
            var mainModule = new Components.Main.Main();
            this.dependencies.push(mainModule.ID);

            var commonModule = new Components.Common.Common();
            this.dependencies.push(commonModule.ID);
        }

        private initializeInstance() {
            this.instance = angular.module(App.Config.Configuration.Application_Namespace, this.dependencies);
        }
    }

    var application = new Application();
}