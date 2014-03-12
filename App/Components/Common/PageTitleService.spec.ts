/// <reference path="../../_Typings.ts" />

module Components.Common.Tests {
    'use strict';

    describe("PageTitleService", () => {

        beforeEach(module(Components.Common.Common.ID));

        describe("title", () => {

            var original;

            beforeEach(()=> {
                original = App.Config.Configuration.Application_Title;
            });

            afterEach(()=> {
                App.Config.Configuration.Application_Title = original;
            });

            it("should initially be set to null", () => {
                App.Config.Configuration.Application_Title = "Test";

                inject((commonPageTitleService)=> {
                    expect(commonPageTitleService.title).toBe("Test");
                });
            });

            it("should be equal to application title when set to null", inject((commonPageTitleService) => {
                App.Config.Configuration.Application_Title = "Test";
                commonPageTitleService.title = null;
                expect(commonPageTitleService.title).toBe("Test");
            }));

            it("should be equal to application title when set to an empty string", inject((commonPageTitleService) => {
                App.Config.Configuration.Application_Title = "Test";
                commonPageTitleService.title = "";
                expect(commonPageTitleService.title).toBe("Test");
            }));

            it("should use the form Title - Application Title when given a string", inject((commonPageTitleService) => {
                App.Config.Configuration.Application_Title = "Test";
                commonPageTitleService.title = "Title";
                expect(commonPageTitleService.title).toBe("Title - Test");
            }));
        });
    });
}