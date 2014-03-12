/// <reference path="../../_Typings.ts" />

module Components.Common.Tests {
    'use strict';

    describe("PageTitleService", () => {
        var commonPageTitleService: Services.IPageTitleService;

        beforeEach(module(Components.Common.Common.ID));

        beforeEach(inject((_commonPageTitleService_) => {
            commonPageTitleService = _commonPageTitleService_;
        }));

        describe("title", () => {
            it("should initially be set to null", () => {
                expect(commonPageTitleService.title).toBe(null);
            });

            it("should be equal to application title when set to null", () => {
                App.Config.Configuration.Application_Title = "Test";
                commonPageTitleService.title = null;
                expect(commonPageTitleService.title).toBe("Test");
            });

            it("should be equal to application title when set to an empty string", () => {
                App.Config.Configuration.Application_Title = "Test";
                commonPageTitleService.title = "";
                expect(commonPageTitleService.title).toBe("Test");
            });

            it("should use the form Title - Application Title when given a string", () => {
                App.Config.Configuration.Application_Title = "Test";
                commonPageTitleService.title = "Title";
                expect(commonPageTitleService.title).toBe("Title - Test");
            });
        });
    });
}