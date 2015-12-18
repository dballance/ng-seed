import * as angular from "angular";
import { FeatureDirective } from "./feature";
import { AnotherFeatureDirective } from "./another.feature";

/** The name of the angular module. */
const name: string =  angular.module("app.feature", [])
.directive("anotherFeature", AnotherFeatureDirective.instance)
.directive("featureDirective", FeatureDirective.instance).name;

export default name;
