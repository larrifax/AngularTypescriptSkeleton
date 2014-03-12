/// <reference path="../../_Typings.ts" />

module Components.Main.Tests {
    'use strict';

    import Main = Components.Main.Main;
    import Controllers = Components.Main.Controllers;

    describe(Controllers.MainController.ID, () => {

        beforeEach(module(Main.ID));

        it("should insert the correct content", () => {
            angular.mock.module(($provide)=> {
                $provide.value(Components.Common.Services.PageTitleService.ID, {
                    get title() {
                        return "Some Title";   
                    }
                });
            });

            inject(($controller)=> {
                var $scope = {};
                var controller: Controllers.MainController = $controller(Controllers.MainController.ID, { $scope: $scope });

                expect(controller.pageTitle).toBe("Some Title");
            });
        });
    });
}