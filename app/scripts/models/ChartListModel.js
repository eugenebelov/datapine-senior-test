define(['underscore', 'backbone'], function(_, Backbone) {

	var ChartListModel = Backbone.Model.extend({
		defaults: {
			type: "",
			link: "",
			chartSettings: {},
			series: [],
			imgThumb: ""
		}
	});

	return ChartListModel;
});