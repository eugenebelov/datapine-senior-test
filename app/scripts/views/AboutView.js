define(['jquery', 'underscore', 'backbone', 'text!templates/about.html'], 
	function($, _, Backbone, aboutTemplate) {

	var AboutView = Backbone.Layout.extend({
		template: _.template( aboutTemplate )
	});

  return AboutView;
});