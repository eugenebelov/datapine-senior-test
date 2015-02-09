define(['jquery', 'underscore', 'backbone', 'text!templates/main-menu.html'], 
	function($, _, Backbone, mainMenuTemplate) {

	var ChartView = Backbone.View.extend({
		el: $('#appView'),
		render: function() {
			
			var data = {},
				compiledTemplate = _.template( mainMenuTemplate, data );

			this.$el.append( compiledTemplate );
		}
	});

  return ChartView;
});