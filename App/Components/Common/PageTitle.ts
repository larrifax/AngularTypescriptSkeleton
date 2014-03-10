/// <reference path="../../_Typings.ts" />

module Components.Common.Services {
    'use strict';

    export interface IPageTitleService {
        title: string;
    }

    export class PageTitleService implements IPageTitleService {
        public static ID = "PageTitle";
        public static injection(): any[] {
            return [PageTitleService];
        }

        public title: string;

        constructor() {
            this.title = "A Test Title from PageTitleService";
        }
    }
}