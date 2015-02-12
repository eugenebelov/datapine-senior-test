define(['backbone', 
	'views/ChartView', 'views/AboutView', 
	'views/ChartDetailsView'], 
	function(Backbone, 
		ChartView, AboutView, 
		ChartDetailsView){
    
	var Router = Backbone.Router.extend({
		routes: {
			"": "charts",
			"about": "about",
			"charts": "charts",
			"charts/:type": "show-previews"
		}
	});

	var initialize = function(layout) {
		var router = new Router();

		router.on('route:about', function() {
			console.log("show about");

			layout.setView("#appView", new AboutView());
			layout.render();
		})

		router.on('route:charts', function() {
			console.log("show charts");

			layout.setView("#appView", new ChartView({
				collection: layout.chartCollection
			}));
			layout.render();
		})

		router.on('route:show-previews', function(type) {

			console.log("type is", type)

			layout.setView("#appView", new ChartDetailsView({
				collection: layout.chartCollection,
				type: type
			}));

			layout.render();
		})
	};

	return {
		initialize: initialize
	};
});