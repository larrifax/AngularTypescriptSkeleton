/// <reference path="../_Typings.ts" />

module App.Main {
    'use strict';

    export class MainModule {
        public static ModuleId = "App.Main";

        constructor() {
            var mainModule = angular.module(MainModule.ModuleId, []);

            mainModule.controller(MainController.ID, MainController.injection());
        }
    }

    var main = new MainModule();
}