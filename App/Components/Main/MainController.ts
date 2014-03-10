/// <reference path="../../_Typings.ts" />

module Components.Main.Controllers {
    'use strict';

    export class MainController {
        public static ID = "Main";
        public static injection(): any[] {
            return ["$scope", "PageTitle", MainController];
        }

        public pageTitle: string;

        constructor(private $scope: ng.IScope, private pageTitleService: Components.Common.Services.IPageTitleService) {
            this.pageTitle = this.pageTitleService.title;
        }
    }
}