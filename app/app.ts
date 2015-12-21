declare var require: any;
import * as feature from "./feature";
require("../content/style/app.less");

angular.module("app", [feature.module]);