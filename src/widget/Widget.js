define(["backbone"], function(Backbone) {
	"use strict";

	var Widget = Backbone.Model.extend({
		defaults: {
			quantity: 1,
			day: "monday",
			weeks: 1
		}
	});

	return Widget;
});
