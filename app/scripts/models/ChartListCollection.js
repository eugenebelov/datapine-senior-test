define(['underscore', 'backbone', 'models/ChartListModel'], function(_, Backbone, ChartListModel) {

	var ChartListCollection = Backbone.Collection.extend({
		url: '/scripts/mock/charts.json',
		model: ChartListModel,

		parse: function(response) {
			return response;
		}
	});
	
	return ChartListCollection;
});