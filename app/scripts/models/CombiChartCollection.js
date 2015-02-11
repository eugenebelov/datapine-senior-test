define(['underscore', 'backbone', 'models/CombiChartModel'], function(_, Backbone, CombiChartModel) {

	var CombiChartCollection = Backbone.Collection.extend({
		url: '/scripts/mock/combi_chart_param.json',
		model: CombiChartModel,

		parse: function(response) {
			return response;
		}
	});
	
	return CombiChartCollection;
});