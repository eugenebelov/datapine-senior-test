define(['jquery', 'underscore', 'backbone', 'highcharts', 'drilldown', 'text!templates/charts-preview.html'], 
	function($, _, Backbone, Highcharts, Drilldown, chartsTemplate) {

	var ChartViewPreview = Backbone.Layout.extend({
		el: $('#appView'),

		template: _.template( chartsTemplate ),

		addLineChart: function() {
			$('#container').highcharts({
		        title: {
		            text: 'Monthly Average Temperature',
		            x: -20 //center
		        },
		        subtitle: {
		            text: 'Source: WorldClimate.com',
		            x: -20
		        },
		        xAxis: {
		            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		        },
		        yAxis: {
		            title: {
		                text: 'Temperature (°C)'
		            },
		            plotLines: [{
		                value: 0,
		                width: 1,
		                color: '#808080'
		            }]
		        },
		        tooltip: {
		            valueSuffix: '°C'
		        },
		        legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
		        series: [{
		            name: 'Tokyo',
		            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		        }, {
		            name: 'New York',
		            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
		        }, {
		            name: 'Berlin',
		            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
		        }, {
		            name: 'London',
		            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		        }]
		    });
		},

		addChart: function() {
			return $('#container').highcharts({
		        chart: {
		            type: 'column',
		            events: {
		                drilldown: function () {
		                    // this.setSize(200,200);
		                },
		                drillup: function () {
		                    // this.setSize(400,400);
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
			// this.addLineChart();
		},

		render: function() {
			
		}
	});

  return ChartViewPreview;
});