module App.Common {
    'use strict';

    export class TestHelper {

        static serviceInjector<T>(injector, serviceName: string): T {
            return injector.invoke([serviceName, (service) => {
                return service;
            }]);
        }

        static controllerInjector<T>(injector, controllerName: string, scope = {}): T {
            return injector(controllerName, { $scope: scope });
        }
    }
}