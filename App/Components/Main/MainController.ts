/// <reference path="../../_Typings.ts" />

module Components.Main.Controllers {
    'use strict';

    export class MainController {
        public static ID = "Main";
        public static injection(): any[] {
            return ["$scope", MainController];
        }

        public pageTitle: string;

        constructor(private $scope: ng.IScope) {
            this.pageTitle = "Test";

            this.$scope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
                if (angular.isDefined(toState.data.pageTitle)) {
                    this.pageTitle = toState.data.pageTitle;
                }
            });
        }
    }
}