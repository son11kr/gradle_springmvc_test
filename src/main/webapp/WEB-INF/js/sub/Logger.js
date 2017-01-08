define(function() {
   "use strict";
    
    var console = window.console;
    var exports = {
        version: "0.1.0",
        author: "jes"
    };
    
    exports.log = function() {
        var args = Array.prototype.unshift.call(arguments, new Date().toLocaleString());
        console.log.apply(console, arguments);
    };
    
    return exports;
});