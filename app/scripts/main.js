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
        },
        highcharts: {
            "exports": "highcharts",
            "deps": [ "jquery"] 
        },
        drilldown: {
            "exports": "drilldown",
            "deps": [ "jquery", "highcharts"] 
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        highcharts: '../bower_components/highcharts-release/highcharts',
        drilldown: '../bower_components/highcharts-release/modules/drilldown'
    }
});

require([
    'backbone', 'application'
], function (Backbone, Application) {

    console.log('Hello from Backbone! :)');

    Application.initialize();

    Backbone.history.start();
});
