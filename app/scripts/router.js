define(['backbone', 
	'views/ChartView', 'views/AboutView', 
	'views/LineChartView', 'views/PieChartView', 
	'views/ColumnChartView', 'views/CombiChartView'], 
	function(Backbone, 
		ChartView, AboutView, 
		LineChartView, PieChartView, 
		ColumnChartView, CombiChartView){
    
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

			switch(type) {
				case "line":
					var preview = new LineChartView()
					preview.render();
				break;
				case "pie":
					var preview = new PieChartView()
					preview.render();
				break;
				case "column":
					var preview = new ColumnChartView()
					preview.render();
				break;
				case "combi":
					var preview = new CombiChartView()
					preview.render();
				break;
			}
		})
	};

	return {
		initialize: initialize
	};
});