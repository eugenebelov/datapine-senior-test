define(['jquery', 'underscore', 'backbone', 'router', 'layoutmanager', 'views/MainMenuView'], 
  function($, _, Backbone, Router, Layout, MainMenuView) {
    var initialize = function() {
    	Router.initialize();

		Layout.configure({
			manage: true
		});

		new MainMenuView().render();
    }

    return {
    	initialize: initialize
    }
});