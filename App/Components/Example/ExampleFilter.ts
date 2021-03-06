module Components.Example.Filters {
    'use strict';

    export class ExampleFilter {
        public static ID = App.Common.InjectableHelper.createFilterId(Example.ID, "Example");
        public static injection(): any[] {
            return ["$log", ExampleFilter.factory];
        }

        public static factory($log: ng.ILogService) {
            return (value: string)=> {
                $log.info("Ran value through filter");
                return value.toUpperCase();
            };
        }
    }
}