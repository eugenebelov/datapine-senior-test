define(['jquery', 'underscore', 'backbone', 'highcharts',
	'models/CombiChartCollection',
	'text!templates/charts-preview.html'], 
	function($, _, Backbone, Highcharts,
		CombiChartCollection, 
		chartsTemplate) {

	var CombiChartView = Backbone.Layout.extend({
		el: $('#appView'),

		template: _.template( chartsTemplate ),

		initialize: function() {
			this.collection = new CombiChartCollection();
			this.collection.fetch();

			this.listenTo(this.collection, "sync", this.render);
		},

		addChart: function() {
			return $('#container').highcharts({
		        title: {
		            text: 'Combination chart'
		        },
		        xAxis: {
		            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
		        },
		        labels: {
		            items: [{
		                html: 'Total fruit consumption',
		                style: {
		                    left: '50px',
		                    top: '18px',
		                    color: 'black'
		                }
		            }]
		        },
		        series: this.collection.toJSON()
		    })
		},

		afterRender: function() {
			this.addChart();
		},

		render: function() {
			
		}
	});

  return CombiChartView;
});