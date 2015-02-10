define(['underscore', 'backbone'], function(_, Backbone) {

	var ChartListModel = Backbone.Model.extend({
		defaults: {
			type: "pie",
			link: "#charts/pie"
		}
	});

	return ChartListModel;
});