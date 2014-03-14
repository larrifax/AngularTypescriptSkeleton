/// <reference path="../../_Typings.ts" />

module Components.Main.Tests {
    'use strict';

    describe("Main", () => {

        beforeEach(()=> {
            browser.get("");
        });

        it("should display the title of the page in the page contents", () => {
            var binding = element(by.binding("{{vm.pageTitle}}"));
            expect(binding.getText()).toBe("This is the title of the page: Application Name");
        });

        it("should contain the example directive", () => {
            var directive = element(by.css("[data-example-example]"));
            expect(directive.isPresent()).toBe(true);
        });

        it("should contain a list consisting of 4 items", () => {
            var elements = element.all(by.repeater("value"));
            expect(elements.count()).toBe(4);
        });

        it("should contain a list wherein the example filter is applied", () => {
            var firstElement = element.all(by.repeater("value")).first();
            expect(firstElement.getText()).toBe("VALUES");
        });

    });
}