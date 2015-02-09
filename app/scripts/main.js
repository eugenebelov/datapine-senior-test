/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'backbone', 'application'
], function (Backbone, Application) {

    console.log('Hello from Backbone! :)');

    Application.initialize();

    Backbone.history.start();
});
