requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery':'http://code.jquery.com/jquery-3.1.1.min',
        // 'jquery':'http://code.jquery.com/jquery-1.8.2.min',
        'backbone': 'http://backbonejs.org/backbone-min.js',
        'underscore' : 'http://underscorejs.org/underscore-min.js'
    },

    shim: {
        "backbone": {
            deps: ['underscore', 'jquery'],
            exports:"Backbone"
        },
        "underscore":{
            exports:"underscore"
        }

    }
});

// requirejs(['jquery', 'App','sub/Logger'], function($, app, logger) {
//     $(document).ready(function () {
//         logger.log("Application start");
//
//         var jQuery = $;
//         alert($().jquery);
//
//     });
// });


// requirejs(['sub/MainController'], function(main) {
//     main.execute();
// });


// requirejs(['sub/JqueryTest1'], function(jqueryTest1) {
//     jqueryTest1.console();
// });

requirejs(["jquery"], function($) {
    console.log("asdf");
    console.log(($().jquery));
});