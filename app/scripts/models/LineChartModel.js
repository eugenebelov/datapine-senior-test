define(['underscore', 'backbone'], function(_, Backbone) {

	var LineChartModel = Backbone.Model.extend({
		defaults: {
			name: "Tokyo",
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		}
	});

	return LineChartModel;
});