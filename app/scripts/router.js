define(['backbone', 'views/ChartView', 'views/AboutView', 'views/ChartViewPreview'], 
	function(Backbone, ChartView, AboutView, ChartViewPreview){
    
	var Router = Backbone.Router.extend({
		routes: {
			"": "charts",
			"about": "about",
			"charts": "charts",
			"charts/:type": "show-previews"
		}
	});

	var initialize = function() {
		var router = new Router();

		router.on('route:about', function() {
			console.log("show about");

			var about = new AboutView();
			about.render();
		})

		router.on('route:charts', function() {
			console.log("show charts");

			var chart = new ChartView();
			chart.render();
		})

		router.on('route:show-previews', function(type) {
			console.log("show-previews", type);

			var preview = new ChartViewPreview()
			preview.render();
		})
	};

	return {
		initialize: initialize
	};
});