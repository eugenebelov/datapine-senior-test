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
			console.log("show-previews", type, layout.chartCollection);

			switch(type) {
				case "line":
					layout.setView("#appView", new LineChartView({
						collection: layout.chartCollection
					}));
				break;
				case "pie":
					layout.setView("#appView", new PieChartView({
						collection: layout.chartCollection
					}));
				break;
				case "column":
					layout.setView("#appView", new ColumnChartView({
						collection: layout.chartCollection
					}));
				break;
				case "combi":
					layout.setView("#appView", new CombiChartView({
						collection: layout.chartCollection
					}));
				break;
			}

			layout.render();
		})
	};

	return {
		initialize: initialize
	};
});