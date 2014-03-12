module Components.Example.Directives {
    'use strict';

    export class ExampleDirective implements ng.IDirective {
        public static ID = App.Common.InjectableHelper.createDirectiveId(Example.ID, "Example");
        public static injection(): any[] {
            return [() => new ExampleDirective()];
        }

        public template: string;

        constructor() {
            this.template = this.getTemplate();
        }

        public link(scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: any) {
            element[0].innerHTML = element[0].innerHTML + "<p>And this is from the link function of the directive!</p>";
        }

        private getTemplate() {
            return '<p>Text from the Example directive.</p>';
        }
    }
}