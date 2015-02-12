define(['jquery', 'underscore', 'backbone', 'router', 'layoutmanager', 'ApplicationLayout'], 
  function($, _, Backbone, Router, Layout, ApplicationLayout) {
    var initialize = function() {

    	Layout.configure({
			manage: true
		});

        var layout = new ApplicationLayout();
        layout.render();

        Router.initialize(layout);

        Backbone.history.start();
    }

    return {
    	initialize: initialize
    }
});