define(function(require) {
	"use strict";

	var React = require("react");
	var Quantity = require("jsx!./Quantity");
	var Day = require("jsx!./Day");
	var NumberOfWeeks = require("jsx!./NumberOfWeeks");
	var Summary = require("jsx!./Summary");

	var Widget = React.createBackboneClass({
		render: function() {
			var model = this.model();

			return (
				<div className="widget">
					<Quantity model={model}/>
					<br/>
					<Day model={model}/>
					<br/>
					<NumberOfWeeks model={model}/>
					<br/>
					<Summary model={model}/>
				</div>
			);
		}
	});

	return Widget;
});
