import * as angular from "angular-mocks/angular";

describe("feature", () => {
	var $compile;
	var $rootScope;
	
	beforeEach(angular.mock.module("app.feature"));
	
	describe("feature directive", () => {
		
		beforeEach( () => {
		angular.mock.inject( (_$compile_, _$rootscope_) => {
			$compile = _$compile_;
			$rootScope = _$rootscope_;
		});
		
		});
		
		it("should say something", () => {
			var element = $compile('<feature-directive></feature-directive>')($rootScope);
			expect(element).toContain("Feature Directive");
		});
		
	});
});
