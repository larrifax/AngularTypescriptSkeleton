/// <reference path="../_Typings.ts" />

module App.Main.Controllers {
    'use strict';

    export class Main {
        public static ID = "Main";
        public static injection(): any[] {
            return ["$scope", Main];
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