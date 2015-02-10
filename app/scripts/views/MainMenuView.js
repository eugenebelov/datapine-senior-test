define(['jquery', 'underscore', 'backbone', 'text!../templates/main-menu.html'], 
	function($, _, Backbone, mainMenuTemplate) {

	var MainMenuView = Backbone.Layout.extend({
		el: $('#menu'),
		template: _.template( mainMenuTemplate),
		render: function() {
			
		}
	});

  return MainMenuView;
});