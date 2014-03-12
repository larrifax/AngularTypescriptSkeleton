module App.Common {
    'use strict';

    var camelCase = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);

    export class InjectableHelper {

        static createControllerId(prefix: string, name: string) {
            return camelCase(prefix + name + "Controller");
        }

        static createDirectiveId(prefix: string, name: string) {
            return camelCase(prefix + name + "Directive");
        }

        static createServiceId(prefix: string, name: string) {
            return camelCase(prefix + name + "Service");
        }

        static createFilterId(prefix: string, name: string) {
            return camelCase(prefix + name + "Filter");
        }

        static createId(prefix: string, name: string) {
            return prefix == null || prefix === "" ? name : prefix + "." + name;
        }

        static createPrefixedId(name: string) {
            var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            return App.Config.Configuration.Application_Prefix.toLowerCase() + capitalizedName;
        }
    }
}