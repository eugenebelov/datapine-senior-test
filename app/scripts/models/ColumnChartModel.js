define(['underscore', 'backbone'], function(_, Backbone) {

	var ColumnChartModel = Backbone.Model.extend({
		defaults: {
			name: "Mike",
			data: [5, 3, 4, 7, 2]
		}
	});

	return ColumnChartModel;
});