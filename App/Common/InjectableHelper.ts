module App.Common {
    'use strict';

    var camelCase = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);
    var capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

    export class InjectableHelper {

        static createControllerId(prefix: string, name: string) {
            return capitalize(prefix + "." + name + "Controller");
        }

        static createServiceId(prefix: string, name: string) {
            return camelCase(prefix + name + "Service");
        }

        static createDirectiveId(prefix: string, name: string) {
            return camelCase(prefix + name);
        }

        static createFilterId(prefix: string, name: string) {
            return camelCase(prefix + name + "Filter");
        }
    }
}