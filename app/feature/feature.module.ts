import * as angular from "angular";
import { FeatureDirective } from "./feature";

/** The name of the angular module. */
const name: string =  angular.module("app.feature", [])
.directive("featureDirective", FeatureDirective.instance).name;

export default name;
