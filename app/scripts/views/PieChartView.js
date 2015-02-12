
define(['jquery', 'underscore', 'backbone', 'highcharts', 'models/PieChartCollection','text!templates/charts-preview.html'], 
	function($, _, Backbone, Highcharts, PieChartCollection, chartsTemplate) {

	var PieChartView = Backbone.Layout.extend({
		el: $('#appView'),

		template: _.template( chartsTemplate ),

		initialize: function() {
			this.collection = new PieChartCollection();
			this.collection.fetch();

			this.listenTo(this.collection, "sync", this.render);
		},

		addChart: function() {
			$('#container').highcharts({
				chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: 0,
		            plotShadow: false
		        },
		        title: {
		            text: 'Browser<br>shares',
		            align: 'center',
		            verticalAlign: 'middle',
		            y: 50
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                dataLabels: {
		                    enabled: true,
		                    distance: -50,
		                    style: {
		                        fontWeight: 'bold',
		                        color: 'white',
		                        textShadow: '0px 1px 2px black'
		                    }
		                },
		                startAngle: -90,
		                endAngle: 90,
		                center: ['50%', '75%']
		            }
		        },
		        series: this.collection.toJSON()
			});	
		},

		afterRender: function() {
			this.addChart();
		}
	});

  return PieChartView;
});