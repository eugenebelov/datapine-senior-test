define(['jquery', 'underscore', 'backbone', 'highcharts',
	'models/ChartListCollection',
	'text!templates/charts.html'], 
	function($, _, Backbone, Highcharts, 
		ChartListCollection,
		chartsTemplate) {

	var ChartView = Backbone.Layout.extend({
		// el: $('#appView'),
		
		template: _.template(chartsTemplate),

		initialize: function() {
			// this.listenTo(this.collection, "sync", this.generateThumbnail);
			// this.listenTo(this.collection, "change", function(data) {
			// 	if(data.get('imgThumb')) {
			// 		this.render();
			// 	}
			// });

			this.listenTo(this.collection, "sync", this.render);
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
			    obj.width = 150;
			    obj.type = 'image/png';
			    obj.async = true;

			    $.ajax({
			        type: 'post',
			        url: "http://export.highcharts.com/",
			        data: obj,
			        context: model,
			        async: true,
			        success: function (data) {
			        	var reg = /files\//g;

			        	if(data != undefined && data.match(reg)) {
			        		this.set('imgThumb', "http://export.highcharts.com/" + data);
			        	}
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