module App.Common {
    'use strict';

    export class InjectableHelper {
        static createId(prefix: string, name: string) {
            return prefix == null || prefix === "" ? name : prefix + "." + name;
        }
    }
}