/// <reference path="../../_Typings.ts" />

module Components.Common.Services {
    'use strict';

    export interface IStringService {
        format: (format: string, ...args: string[]) => string;
    }

    export class StringService implements IStringService {
        public static ID = "String";
        public static injection(): any[] {
            return [StringService];
        }

        public format(format: string, ...args: string[]): string {
            return format.replace(/{(\d+)}/g, (match, index) => {
                return args[index] !== undefined ? args[index] : match;
            });
        }
    }
}