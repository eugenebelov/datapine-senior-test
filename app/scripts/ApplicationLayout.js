define(['jquery', 'underscore', 'backbone', 'views/MainMenuView', 'models/ChartListCollection',], 
	function($, _, Backbone, MainMenuView, ChartListCollection) {

	var ApplicationLayout = Backbone.Layout.extend({
		el: $("#application"),
        template: "#application",

        views: {
            "#menu": new MainMenuView()
        },

        initialize: function() {
			this.chartCollection = new ChartListCollection();
			this.chartCollection.fetch();
		}
	});

  	return ApplicationLayout;
});