module App.Common {
    export interface IModule {
        ID: string;
        dependencies: string[];
        instance: ng.IModule;
    }
}