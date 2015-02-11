define(['jquery', 'underscore', 'backbone', 'highcharts',
	'models/ColumnChartCollection',
	'text!templates/charts-preview.html'], 
	function($, _, Backbone, Highcharts,
		ColumnChartCollection,
		chartsTemplate) {

	var ColumnViewPreview = Backbone.Layout.extend({
		el: $('#appView'),

		template: _.template( chartsTemplate ),

		initialize: function() {
			this.collection = new ColumnChartCollection();
			this.collection.fetch();

			this.listenTo(this.collection, "sync", this.render);
		},

		addChart: function() {
			$('#container').highcharts({
		        chart: {
		            type: 'bar'
		        },
		        title: {
		            text: 'Stacked bar chart'
		        },
		        xAxis: {
		            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: 'Total fruit consumption'
		            }
		        },
		        legend: {
		            reversed: true
		        },
		        plotOptions: {
		            series: {
		                stacking: 'normal'
		            }
		        },
		        series: this.collection.toJSON()
		    });
		},

		afterRender: function() {
			this.addChart();
		},

		render: function() {
			
		}
	});

  return ColumnViewPreview;
});