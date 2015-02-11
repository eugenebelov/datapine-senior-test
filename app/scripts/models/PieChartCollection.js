define(['underscore', 'backbone', 'models/PieChartModel'], function(_, Backbone, PieChartModel) {

	var PieChartListCollection = Backbone.Collection.extend({
		url: '/scripts/mock/pie_chart_param.json',
		model: PieChartModel,

		parse: function(response) {
			return response;
		}
	});
	
	return PieChartListCollection;
});