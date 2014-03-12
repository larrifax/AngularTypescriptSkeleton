/// <reference path="../../_Typings.ts" />

module Components.Main.Tests {
    'use strict';

    describe("MainController", () => {

        beforeEach(module(Components.Main.Main.ID));

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
                var controller: Components.Main.Controllers.MainController = $controller(Components.Main.Controllers.MainController.ID, { $scope: $scope });

                expect(controller.pageTitle).toBe("Some Title");
            });
        });
    });
}