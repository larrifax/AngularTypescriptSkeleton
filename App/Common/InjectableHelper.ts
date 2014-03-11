module App.Common {
    'use strict';

    export class InjectableHelper {
        static createId(prefix: string, name: string) {
            return prefix == null || prefix === "" ? name : prefix + "." + name;
        }

        static createDirectiveId(name: string) {
            var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            return App.Config.Configuration.Application_Prefix.toLowerCase() + capitalizedName;
        }
    }
}