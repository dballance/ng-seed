import "./feature.module";

describe("feature", () => {
	var $compile;
	var $rootScope;
	
	beforeEach(angular.mock.module("app.feature"));
	
	describe("feature directive", () => {
		
		beforeEach( () => {
		angular.mock.inject( (_$compile_, _$rootScope_) => {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
		});
		
		});
		
		it("should say something", () => {
			expect(1).toBe(1);
			var element = $compile('<feature-directive></feature-directive>')($rootScope);
			console.log(element);
			expect(element.html()).toContain("<h1> Feature Directive </h1>");
		});
		
	});
});
