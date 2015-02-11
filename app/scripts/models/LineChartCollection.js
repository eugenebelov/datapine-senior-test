define(['underscore', 'backbone', 'models/LineChartModel'], function(_, Backbone, LineChartModel) {

	var LineChartCollection = Backbone.Collection.extend({
		url: '/scripts/mock/line_chart_param.json',
		model: LineChartModel,

		parse: function(response) {
			return response;
		}
	});
	
	return LineChartCollection;
});