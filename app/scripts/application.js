define(['jquery', 'underscore', 'backbone', 'router', 'layoutmanager', 'views/MainMenuView'], 
  function($, _, Backbone, Router, Layout, MainMenuView) {
    var initialize = function() {
    	Layout.configure({
			manage: true
		});

		new MainMenuView().render();

		Router.initialize();
    }

    return {
    	initialize: initialize
    }
});