// define(["sub/Logger", "sub/AlertTest"], function(logger, alertTest) {
define(["sub/Logger", "sub/JqueryTest1"], function(logger, test1) {
// define(["sub/Logger", "sub/JqueryTest2"], function(logger, test2) {
   "use strict";
    
    var exports = {
        type: "controller",
        name: "Main"
    };
    
    var bindEvent = function() {
        logger.log("bind event...");
    };
    
    var view = function() {
        logger.log("render ui..");
    };
    
    exports.execute = function(routeParameters) {
        logger.log(exports.name + "  controller execute...");
    }

    test1.console();

    // test2.console();

    return exports;
});