/// <reference path="../../_Typings.ts" />

module Components.Example.Tests {
    'use strict';

    import Example = Components.Example.Example;
    import Filters = Components.Example.Filters;

    describe(Filters.ExampleFilter.ID, () => {

        beforeEach(module(Example.ID));

        it("should return TEST when given Test", inject(($filter) => {
            var filter = $filter(Filters.ExampleFilter.ID);
            expect(filter("Test")).toBe("TEST");
        }));
    });
}