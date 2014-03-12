/// <reference path="../../_Typings.ts" />

module Components.Example.Tests {
    'use strict';

    describe("ExampleFilter", () => {

        beforeEach(module(Components.Example.Example.ID));

        it("should return TEST when given Test", inject(($filter) => {
            var filter = $filter(Components.Example.Filters.ExampleFilter.ID);
            expect(filter("Test")).toBe("TEST");
        }));
    });
}