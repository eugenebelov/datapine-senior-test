define(['jquery', 'underscore', 'backbone', 'highcharts',
	'models/LineChartCollection',
	'text!templates/charts-preview.html'], 
	function($, _, Backbone, Highcharts, 
		LineChartCollection,
		chartsTemplate) {

	var LineChartView = Backbone.Layout.extend({
		// el: $('#appView'),

		template: _.template( chartsTemplate ),

		initialize: function() {
			// this.collection = new LineChartCollection();
			// this.collection.fetch();

			// this.listenTo(this.collection, "sync", this.render);
		},

		addChart: function() {
			// console.log(this.collection)
			// $('#container').highcharts({
			// 	"title": {
			//         "text": "Monthly Average Temperature",
			//         "x": -20
			//     },
			//     "subtitle": {
			//         "text": "Source: WorldClimate.com",
			//         "x": -20
			//     },
			//     "xAxis": {
			//         "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
			//     },
			//     "yAxis": {
			//         "title": {
			//             "text": "Temperature (°C)"
			//         },
			//         "plotLines": [{
			//             "value": 0,
			//             "width": 1,
			//             "color": "#808080"
			//         }]
			//     },
			//     "tooltip": {
			//         "valueSuffix": "°C"
			//     },
			//     "legend": {
			//         "layout": "vertical",
			//         "align": "right",
			//         "verticalAlign": "middle",
			//         "borderWidth": 0
			//     },
			//     "series": this.collection.toJSON()
			// });
		},

		afterRender: function() {
			this.addChart();
		},

		render: function() {
			
		}
	});

  return LineChartView;
});