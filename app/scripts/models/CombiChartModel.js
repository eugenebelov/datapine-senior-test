define(['underscore', 'backbone'], function(_, Backbone) {

	var CombiChartModel = Backbone.Model.extend({
		defaults: {
			name: "Mike",
			data: [5, 3, 4, 7, 2]
		}
	});

	return CombiChartModel;
});