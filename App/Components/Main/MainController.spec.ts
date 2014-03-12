/// <reference path="../../_Typings.ts" />

module Components.Main.Tests {
    'use strict';

    import TestHelper = App.Common.TestHelper;
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
                var controller = TestHelper.controllerInjector<Controllers.MainController>($controller, Controllers.MainController.ID);

                expect(controller.pageTitle).toBe("Some Title");
            });
        });
    });
}