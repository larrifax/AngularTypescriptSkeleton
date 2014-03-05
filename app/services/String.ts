/// <reference path="../_Typings.ts" />
'use strict';

import config = require('../config');

var serviceId = 'string';
angular.module(config.Configuration.Application_Namespace).factory(serviceId, [String]);

export interface IString {
    format: (format: string, ...args: string[]) => string;
}

export class String implements IString {
    public format(format: string, ...args: string[]): string {
        return format.replace(/{(\d+)}/g, (match, index)=> {
            return args[index] !== undefined ? args[index] : match;
        });
    }
}