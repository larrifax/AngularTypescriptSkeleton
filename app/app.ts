/// <reference path="_Typings.ts" />

module App {
    'use strict';

    var app = angular.module(App.Config.Configuration.Application_Namespace, [
        // Angular modules
        // Custom modules
        App.Main.MainModule.ModuleId
        // 3rd party modules
    ]);

    //app.config(()=> {

    //});

    //app.run(()=> {

    //});
}