define(['jquery', 'underscore', 'backbone', 'text!../templates/main-menu.html'], 
	function($, _, Backbone, mainMenuTemplate) {

	var MainMenuView = Backbone.Layout.extend({
		template: _.template( mainMenuTemplate),
	});

  	return MainMenuView;
});