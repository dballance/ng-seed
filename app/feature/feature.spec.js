require("./feature.module");
describe("feature", function () {
    var $compile;
    var $rootScope;
    beforeEach(angular.mock.module("app.feature"));
    describe("feature directive", function () {
        beforeEach(function () {
            angular.mock.inject(function (_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            });
        });
        it("should say something", function () {
            expect(1).toBe(1);
            var element = $compile('<feature-directive></feature-directive>')($rootScope);
            console.log(element);
            expect(element.html()).toContain("<h1> Feature Directive </h1>");
        });
    });
});
//# sourceMappingURL=feature.spec.js.map