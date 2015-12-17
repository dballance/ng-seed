var angular = require("angular");
var feature_1 = require("./feature");
var name = angular.module("app.feature", [])
    .directive("featureDirective", feature_1.FeatureDirective.instance).name;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
//# sourceMappingURL=feature.module.js.map