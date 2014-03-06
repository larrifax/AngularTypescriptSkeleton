/// <reference path="../_Typings.ts" />
'use strict';

import config = require('../config');

var serviceId = 'pageTitle';
angular.module(config.Configuration.Application_Namespace).factory(serviceId, [PageTitle]);

export interface IPageTitle {
    title: string;
}

export class PageTitle implements IPageTitle {
    get title(): string {
        return this.title;
    }

    set title(value: string) {
        this.title = value;
    }
}