/// <reference path="../../_Typings.ts" />

module Components.Common.Services {
    'use strict';

    export interface IPageTitleService {
        title: string;
    }

    export class PageTitleService implements IPageTitleService {
        public static ID = "PageTitle";
        public static injection(): any[] {
            return [StringService.ID, PageTitleService];
        }

        private _title: string;

        constructor(private stringService: IStringService) {
            this.title = null;
        }

        get title() {
            return this._title;
        }

        set title(value: string) {
            this._title = value == null || value === "" ?
            App.Config.Configuration.Application_Title :
            this.stringService.format("{0} - {1}", value, App.Config.Configuration.Application_Title);
        }
    }
}