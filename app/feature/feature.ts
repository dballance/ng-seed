declare var require: any;	
    
    export interface IFeatureDirectiveController {

	}

	export class FeatureDirectiveController implements IFeatureDirectiveController {

		constructor() {

		}

	}


	export interface IFeatureDirective extends ng.IDirective {

	}

	export class FeatureDirective implements IFeatureDirective {

		static instance(): ng.IDirective {
			return new FeatureDirective;
		}

		restrict: string = "E";
		controller: IFeatureDirectiveController = FeatureDirectiveController;
		template: string = require("./feature.tpl.html");
	}