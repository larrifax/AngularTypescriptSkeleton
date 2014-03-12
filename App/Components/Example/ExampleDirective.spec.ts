/// <reference path="../../_Typings.ts" />

module Components.Example.Tests {
    'use strict';

    import Example = Components.Example.Example;
    import Directives = Components.Example.Directives;

    describe(Directives.ExampleDirective.ID, () => {

        beforeEach(module(Example.ID));

        it("should insert the correct content", inject(($compile, $rootScope) => {
            var element = $compile('<div data-example-example=""></div>')($rootScope);

            expect(element.html()).toContain('Text from the Example directive');
            expect(element.html()).toContain('<p>And this is from the link function of the directive!</p>');
        }));
    });
}