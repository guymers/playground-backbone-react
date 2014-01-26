define(["react.backbone"], function(React) {
	"use strict";

	var Summary = React.createBackboneClass({
		render: function() {
			var model = this.model();

			return (
				<footer>
					<p>Quantity: {model.get("quantity")}</p>
					<p>Day: {model.get("day")}</p>
					<p>Number of weeks: {model.get("weeks")}</p>
				</footer>
			);
		}
	});

	return Summary;
});
