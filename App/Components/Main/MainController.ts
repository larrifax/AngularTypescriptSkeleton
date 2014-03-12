/// <reference path="../../_Typings.ts" />

module Components.Main.Controllers {
    'use strict';

    export class MainController {
        public static ID = App.Common.InjectableHelper.createControllerId(Main.ID, "Main");
        public static injection(): any[] {
            return ["$scope", Components.Common.Services.PageTitleService.ID, MainController];
        }

        public pageTitle: string;

        constructor(private $scope: ng.IScope, private pageTitleService: Components.Common.Services.IPageTitleService) {
            this.pageTitle = this.pageTitleService.title;
        }
    }
}