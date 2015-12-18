
export interface IFeatureDirectiveController {
	
}

export class FeatureDirectiveController implements IFeatureDirectiveController {
	
	constructor(){
		console.log("yaya");
		this.do();
	}
	
	do(): string {
		const value = Object.assign({}, {test: "value"}, {another: "value"});
		console.log(value);
		return "something";
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
	template: string = `
		<h1> Feature Directive </h1>
	`;
}

