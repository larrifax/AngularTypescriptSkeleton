/// <reference path="../../_Typings.ts" />

module Components.Example.Tests {
    'use strict';

    describe("ExampleDirective", () => {

        beforeEach(module(Components.Example.Example.ID));

        it("should insert the correct content", inject(($compile, $rootScope) => {
            var element = $compile('<div data-example-example=""></div>')($rootScope);

            expect(element.html()).toContain('Text from the Example directive');
            expect(element.html()).toContain('<p>And this is from the link function of the directive!</p>');
        }));
    });
}