define(['jquery', 'underscore', 'backbone', 'highcharts', 'drilldown', 'text!templates/charts.html'], 
	function($, _, Backbone, Highcharts, Drilldown, chartsTemplate) {

	var ChartView = Backbone.Layout.extend({
		el: $('#appView'),
		
		template: _.template(chartsTemplate),

		serialize: function() {
		    return { category: [
		    		{
						name: "Git charts",
						list: [
							{
								chart_type: "Line",
								chart_link: "#/charts/git/line"
							},
							{
								chart_type: "Column",
								chart_link: "#/charts/git/column"
							}
						]
					},
					{
						name: "Skills charts",
						list: [
							{
								chart_type: "Pie",
								chart_link: "#/charts/skills/pie"
							},
							{
								chart_type: "Combi",
								chart_link: "#/charts/skills/combi"
							}
						]
					}
			]}
		},

		render: function() {

		}
	});

  return ChartView;
});