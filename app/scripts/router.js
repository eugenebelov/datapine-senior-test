define(['backbone', 'views/ChartView', 'views/AboutView', 'views/ChartViewPreview'], 
	function(Backbone, ChartView, AboutView, ChartViewPreview){
    
	var Router = Backbone.Router.extend({
		routes: {
			"": "charts",
			"about": "about",
			"charts": "charts",
			"charts/:type": "show-previews",
			"charts/:type/:charttype": "show-full-charts"
		}
	});

	var initialize = function() {
		var router = new Router();

		router.on('route:about', function() {
			console.log("show about");

			new AboutView().render();
		})

		router.on('route:charts', function() {
			console.log("show charts");

			new ChartView().render();
		})

		router.on('route:show-previews', function(type) {
			console.log("show-previews", type);
		})

		router.on('route:show-full-charts', function(type, charttype) {
			console.log("show-full-charts", type, charttype);

			new ChartViewPreview().render();
		})
	};

	return {
		initialize: initialize
	};
});