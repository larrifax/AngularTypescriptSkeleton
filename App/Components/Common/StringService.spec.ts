/// <reference path="../../_Typings.ts" />

module Components.Common.Tests {
    'use strict';

    import TestHelper = App.Common.TestHelper;

    describe("StringService", () => {

        beforeEach(module(Components.Common.Common.ID));

        describe("formatting function", () => {

            var stringService: Components.Common.Services.StringService;

            beforeEach(inject(($injector) => {
                stringService = TestHelper.serviceInjector<Components.Common.Services.StringService>($injector, Components.Common.Services.StringService.ID);
            }));

            it("should format instances of {number}", () => {
                expect(stringService.format("{0}", "Hello")).toBe("Hello");
            });

            it("should support multiple instances of {number}", () => {
                expect(stringService.format("{0} {1}{2}", "Hello", "World", "!")).toBe("Hello World!");
            });

            it("should support multiple instances of the same {number}", () => {
                expect(stringService.format("{0} {0}", "Hello")).toBe("Hello Hello");
            });

            it("should not replace instances of {number} if there is no argument for number", () => {
                expect(stringService.format("{0} {1}", "Hello")).toBe("Hello {1}");
            });

            it("should not format instances of {}", () => {
                expect(stringService.format("{}", "Hello")).toBe("{}");
            });
        });
    });
}