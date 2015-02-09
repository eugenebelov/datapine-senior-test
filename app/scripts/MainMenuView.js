define(['jquery', 'underscore', 'backbone', 'text!templates/main-menu.html'], 
	function($, _, Backbone, mainMenuTemplate) {

	var MainMenuView = Backbone.View.extend({
		el: $('#menu'),
		render: function() {
			
			var data = {},
				compiledTemplate = _.template( mainMenuTemplate, data );

			this.$el.append( compiledTemplate );
		}
	});

  return MainMenuView;
});