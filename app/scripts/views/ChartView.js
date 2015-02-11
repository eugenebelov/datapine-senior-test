define(['jquery', 'underscore', 'backbone', 'highcharts',
	'models/ChartListCollection',
	'text!templates/charts.html'], 
	function($, _, Backbone, Highcharts, 
		ChartListCollection,
		chartsTemplate) {

	var ChartView = Backbone.Layout.extend({
		el: $('#appView'),
		
		template: _.template(chartsTemplate),

		initialize: function() {
			this.thumbUrl = "http://export.highcharts.com/";

			this.collection = new ChartListCollection();
			this.collection.fetch();

			this.listenTo(this.collection, "sync", this.generateThumbnail);
			this.listenTo(this.collection, "change:imgThumb", this.render);
		},

		generateThumbnail: function() {
			this.collection.each(function(model) {
				var obj = {},
					that = this,
					options = {
						chartSettings: model.get("chartSettings"),
			    		series: model.get("series")
					};

			    obj.options = JSON.stringify(options);
			    obj.type = 'image/png';
			    obj.async = true;

			    $.ajax({
			        type: 'post',
			        url: "http://export.highcharts.com/",
			        data: obj,
			        context: model,
			        success: function (data) {
			            this.set('imgThumb', "http://export.highcharts.com/" + data);
			        }
			    });
			})			
		},

		serialize: function() {
		    return { 
		    	category: _.clone(this.collection)
			}
		}
	});

  return ChartView;
});