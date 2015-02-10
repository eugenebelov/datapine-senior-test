define(['jquery', 'underscore', 'backbone', 'highcharts', 'drilldown', 'text!templates/charts-preview.html'], 
	function($, _, Backbone, Highcharts, Drilldown, chartsTemplate) {

	var ChartViewPreview = Backbone.Layout.extend({
		el: $('#appView'),

		template: _.template( chartsTemplate ),

		addChart: function() {
			return $('#container').highcharts({
		        chart: {
		            type: 'column',
		            events: {
		                drilldown: function () {
		                    this.setSize(200,200);
		                },
		                drillup: function () {
		                    this.setSize(400,400);
		                }
		            }
		        },
		        title: {
		            text: 'Basic drilldown'
		        },
		        xAxis: {
		            type: 'category'
		        },

		        legend: {
		            enabled: false
		        },

		        plotOptions: {
		            series: {
		                borderWidth: 0,
		                dataLabels: {
		                    enabled: true,
		                }
		            }
		        },

		        series: [{
		            name: 'Things',
		            colorByPoint: true,
		            data: [{
		                name: 'Animals',
		                y: 5,
		                drilldown: 'animals'
		            }, {
		                name: 'Fruits',
		                y: 2,
		                drilldown: 'fruits'
		            }, {
		                name: 'Cars',
		                y: 4,
		                drilldown: 'cars'
		            }]
		        }, {
		            name: 'Things2',
		            colorByPoint: true,
		            data: [{
		                name: 'Animals2',
		                y: 5,
		                drilldown: 'animals2'
		            }, {
		                name: 'Fruits2',
		                y: 2,
		                drilldown: 'fruits2'
		            }, {
		                name: 'Cars2',
		                y: 4,
		                drilldown: 'cars2'
		            }]
		        }],
		        drilldown: {
		            series: [{
		                id: 'animals',
		                data: [
		                    ['Cats', 4],
		                    ['Dogs', 2],
		                    ['Cows', 1],
		                    ['Sheep', 2],
		                    ['Pigs', 1]
		                ]
		            }, {
		                id: 'fruits',
		                data: [
		                    ['Apples', 4],
		                    ['Oranges', 2]
		                ]
		            }, {
		                id: 'cars',
		                data: [
		                    ['Toyota', 4],
		                    ['Opel', 2],
		                    ['Volkswagen', 2]
		                ]
		            },{
		                id: 'animals2',
		                data: [
		                    ['Cats', 4],
		                    ['Dogs', 2],
		                    ['Cows', 1],
		                    ['Sheep', 2],
		                    ['Pigs', 1]
		                ]
		            }, {
		                id: 'fruits2',
		                data: [
		                    ['Apples', 4],
		                    ['Oranges', 2]
		                ]
		            }, {
		                id: 'cars2',
		                data: [
		                    ['Toyota', 4],
		                    ['Opel', 2],
		                    ['Volkswagen', 2]
		                ]
		            }]
		        }
		    })
		},

		afterRender: function() {
			this.addChart();
		},

		render: function() {
			
		}
	});

  return ChartViewPreview;
});