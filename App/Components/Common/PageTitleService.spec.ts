/// <reference path="../../_Typings.ts" />

module Common.Tests {
    'use strict';

    import TestHelper = App.Common.TestHelper;
    import Common = Components.Common.Common;
    import Services = Components.Common.Services;

    describe(Services.PageTitleService.ID, () => {

        beforeEach(module(Common.ID));

        describe("title", () => {

            var original;

            beforeEach(()=> {
                original = App.Config.Configuration.Application_Title;
            });

            afterEach(()=> {
                App.Config.Configuration.Application_Title = original;
            });

            it("should initially be set to null", inject(($injector) => {
                App.Config.Configuration.Application_Title = "Test";

                var pageTitleService = TestHelper.serviceInjector<Services.PageTitleService>($injector, Services.PageTitleService.ID);

                expect(pageTitleService.title).toBe("Test");
            }));

            it("should be equal to application title when set to null", inject(($injector) => {
                var pageTitleService = TestHelper.serviceInjector<Services.PageTitleService>($injector, Services.PageTitleService.ID);

                App.Config.Configuration.Application_Title = "Test";
                pageTitleService.title = null;
                expect(pageTitleService.title).toBe("Test");
            }));

            it("should be equal to application title when set to an empty string", inject(($injector) => {
                var pageTitleService = TestHelper.serviceInjector<Services.PageTitleService>($injector, Services.PageTitleService.ID);

                App.Config.Configuration.Application_Title = "Test";
                pageTitleService.title = "";
                expect(pageTitleService.title).toBe("Test");
            }));

            it("should use the form Title - Application Title when given a string", inject(($injector) => {
                var pageTitleService = TestHelper.serviceInjector<Services.PageTitleService>($injector, Services.PageTitleService.ID);

                App.Config.Configuration.Application_Title = "Test";
                pageTitleService.title = "Title";
                expect(pageTitleService.title).toBe("Title - Test");
            }));
        });
    });
}