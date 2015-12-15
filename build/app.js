webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);
	var feature = __webpack_require__(3);
	angular.module("app", [feature.default]);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);
	var feature_1 = __webpack_require__(4);
	var name = angular.module("app.feature", [])
	    .directive("featureDirective", feature_1.FeatureDirective.instance).name;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = name;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var FeatureDirective = (function () {
	    function FeatureDirective() {
	        this.restrict = "E";
	        this.template = "\n\t\t<h1> Feature Directive </h1>\n\t";
	    }
	    FeatureDirective.instance = function () {
	        return new FeatureDirective;
	    };
	    return FeatureDirective;
	})();
	exports.FeatureDirective = FeatureDirective;


/***/ }
]);
//# sourceMappingURL=app.js.map