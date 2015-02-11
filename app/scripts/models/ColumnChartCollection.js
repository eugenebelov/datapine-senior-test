define(['underscore', 'backbone', 'models/ColumnChartModel'], function(_, Backbone, ColumnChartModel) {

	var ColumnChartCollection = Backbone.Collection.extend({
		url: '/scripts/mock/bar_chart_param.json',
		model: ColumnChartModel,

		parse: function(response) {
			return response;
		}
	});
	
	return ColumnChartCollection;
});