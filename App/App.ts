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
            this.dependencies = this.initializeLocalModules(Components);
        }

        private initializeLocalModules(namespace: any, except?: (name) => boolean) {
            var dependencies = [];

            var iterator = (key, value)=> {
                var injector = <App.Common.IConstructableInjectable>value[key];
                dependencies.push(this.prepareLocalModule(injector));  
            };

            this.enumerateNamespace(namespace, iterator, except);

            return dependencies;
        }

        private prepareLocalModule(className: App.Common.IConstructableInjectable) {
            var instance = new className();
            return className.ID;
        }
    }

    var application = new Application();
}