module App.Common {
    'use strict';

    export class ModuleBase implements App.Common.IModule {
        static ID: string;

        public instance: ng.IModule;

        public initializeModule(id: string, dependencies: string[] = []) {
            if (id != null) {
                this.instance = angular.module(id, dependencies);
            } else {
                throw new Error("The module is missing an ID");
            }
        }

        public initializeControllers(namespace: any, except?: (name) => boolean) {
            this.wire(namespace, this.instance.controller, except);
        }

        public initializeServices(namespace: any, except?: (name) => boolean) {
            this.wire(namespace, this.instance.service, except);
        }

        public initializeFilters(namespace: any, except?: (name) => boolean) {
            this.wire(namespace, this.instance.filter, except);
        }

        private wire(namespace: any, registrator: (string, Function) => ng.IModule, except?: (name) => boolean) {
            for (var key in namespace) {
                try {
                    if (except != null && except(key)) {
                        continue;
                    }

                    var injector = <IInjectable>(namespace[key]);

                    if (injector.ID && typeof injector.injection == "function") {
                        registrator(injector.ID, injector.injection());
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    interface IInjectable {
        ID: string;
        injection: () => any[];
    }
}