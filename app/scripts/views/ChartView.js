define(['jquery', 'underscore', 'backbone', 'highcharts', 'drilldown', 
	'models/ChartListCollection',
	'text!templates/charts.html'], 
	function($, _, Backbone, Highcharts, Drilldown, 
		ChartListCollection,
		chartsTemplate) {

	var ChartView = Backbone.Layout.extend({
		el: $('#appView'),
		
		template: _.template(chartsTemplate),

		initialize: function() {
			this.collection = new ChartListCollection();
			this.collection.fetch();

			this.listenTo(this.collection, "sync", this.render);
		},

		serialize: function() {
		    return { 
		    	category: _.clone(this.collection)
			}
		}
	});

  return ChartView;
});