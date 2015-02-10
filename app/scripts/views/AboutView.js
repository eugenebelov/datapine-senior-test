define(['jquery', 'underscore', 'backbone', 'text!templates/about.html'], 
	function($, _, Backbone, aboutTemplate) {

	var AboutView = Backbone.Layout.extend({
		el: $('#appView'),
		template: _.template( aboutTemplate ),
		render: function() {
			
			// var data = {},
			// 	compiledTemplate = _.template( aboutTemplate, data );

			// this.$el.html( compiledTemplate );
		}
	});

  return AboutView;
});