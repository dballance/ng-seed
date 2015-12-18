
export interface IAnotherFeatureDirectiveController {
	
}

export class AnotherFeatureDirectiveController implements IAnotherFeatureDirectiveController {
	
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


export interface IAnotherFeatureDirective extends ng.IDirective {
	
}

export class AnotherFeatureDirective implements IAnotherFeatureDirective {
	
	static instance(): ng.IDirective {
		return new AnotherFeatureDirective; 
	}
	
	restrict: string = "E";
	controller: IAnotherFeatureDirectiveController = AnotherFeatureDirectiveController;
	template: string = `
		<h1> Feature Directive </h1>
	`;
}

