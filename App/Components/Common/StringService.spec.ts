/// <reference path="../../_Typings.ts" />

module Components.Common.Tests {
    'use strict';

    describe("StringService", () => {
        var commonStringService: Services.IStringService;

        beforeEach(module(Components.Common.Common.ID));

        beforeEach(inject((_commonStringService_)=> {
            commonStringService = _commonStringService_;
        }));

        describe("formatting function", ()=> {
            it("should format instances of {number}", () => {
                expect(commonStringService.format("{0}", "Hello")).toBe("Hello");
            });

            it("should support multiple instances of {number}", () => {
                expect(commonStringService.format("{0} {1}{2}", "Hello", "World", "!")).toBe("Hello World!");
            });

            it("should support multiple instances of the same {number}", () => {
                expect(commonStringService.format("{0} {0}", "Hello")).toBe("Hello Hello");
            });

            it("should not replace instances of {number} if there is no argument for number", () => {
                expect(commonStringService.format("{0} {1}", "Hello")).toBe("Hello {1}");
            });

            it("should not format instances of {}", () => {
                expect(commonStringService.format("{}", "Hello")).toBe("{}");
            });
        });
    });
}