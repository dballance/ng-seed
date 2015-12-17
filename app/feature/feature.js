var FeatureDirectiveController = (function () {
    function FeatureDirectiveController() {
        console.log("yaya");
    }
    FeatureDirectiveController.prototype.do = function () {
        return "something";
    };
    return FeatureDirectiveController;
})();
exports.FeatureDirectiveController = FeatureDirectiveController;
var FeatureDirective = (function () {
    function FeatureDirective() {
        this.restrict = "E";
        this.controller = FeatureDirectiveController;
        this.template = "\n\t\t<h1> Feature Directive </h1>\n\t";
    }
    FeatureDirective.instance = function () {
        return new FeatureDirective;
    };
    return FeatureDirective;
})();
exports.FeatureDirective = FeatureDirective;
//# sourceMappingURL=feature.js.map