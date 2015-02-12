define(['jquery', 'underscore', 'backbone', 'text!templates/charts-preview.html', 'highcharts'], 
	function($, _, Backbone, chartsTemplate, Highcharts) {

	var LineChartView = Backbone.Layout.extend({

		template: _.template( chartsTemplate ),

		initialize: function() {

			var type = this.type;

			if(this.model == undefined) {
				this.model = _.find(this.collection.models, function(el) { 
					return el.get('type').toLowerCase() == type
				});
			}

			this.listenTo(this.collection, "sync", function(data) {
				this.model = _.find(data.models, function(el) { 
					return el.get('type').toLowerCase() == type
				});

				this.render();

			}.bind(this));
		},

		addChart: function() {
			if(this.model) {
				var chartOptions = _.extend(this.model.get('chartSettings'), {
						series: this.model.get('series')
					});
				
				this.$el.find("#container").highcharts(chartOptions);
			}
		},

		afterRender: function() {
			this.addChart();
		}
	});

  return LineChartView;
});