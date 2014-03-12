/// <reference path="../../_Typings.ts" />

module Components.Common.Tests {
    'use strict';

    describe("PageTitleService", () => {

        beforeEach(module(Components.Common.Common.ID));

        describe("title", () => {
            it("should initially be set to null", () => {
                var commonPageTitleService;

                App.Config.Configuration.Application_Title = "Test";

                inject((_commonPageTitleService_)=> {
                    commonPageTitleService = _commonPageTitleService_;
                });

                expect(commonPageTitleService.title).toBe("Test");
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