module App.Common {
    'use strict';

    export class ModuleBase implements App.Common.IModule {
        public ID: string;
        public dependencies: string[];
        public instance: ng.IModule;

        constructor() {
            if (this.ID != null) {
                this.instance = angular.module(this.ID, this.dependencies || []);
            } else {
                throw new Error("The module is missing an ID");
            }
        }

        wire(namespace: any, registrator: (string, Function) => ng.IModule, byPass?: (s) => boolean) {
            for (var key in namespace) {
                try {
                    if (byPass != null && byPass(key)) {
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

    export interface IInjectable {
        ID: string;
        injection: () => any[];
    }
}