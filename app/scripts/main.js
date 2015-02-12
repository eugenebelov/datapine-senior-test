/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        layoutmanager: '../bower_components/layoutmanager/backbone.layoutmanager',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        highcharts: '../bower_components/highcharts-release/highcharts'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
        highcharts: {
            exports: 'Highcharts',
            deps: ['jquery']
        }
    }
});

require([
    'backbone', 'application'
], function (Backbone, Application) {

    console.log('Hello from Backbone! :)');

    Application.initialize();
});
