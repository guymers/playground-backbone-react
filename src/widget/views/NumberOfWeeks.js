define(["react.backbone"], function(React) {
	"use strict";

	var NumberOfWeeks = React.createBackboneClass({
		numWeeks: 4,
		changeOptions: "change:weeks",

		updateNumberOfWeeks: function(weeks, event) {
			event.preventDefault();
			this.model().set("weeks", weeks);
		},

		render: function() {
			var weeks = [];

			for (var i = 1; i <= this.numWeeks; i++) {
				var selected = this.model().get("weeks") == i;

				weeks.push(
					<div key={i}>
						<a href="" className={selected ? "selected" : ""} onClick={this.updateNumberOfWeeks.bind(null, i)}>{i} Weeks</a>
						<br/>
					</div>
				);
			}

			return (
				<div className="number-of-weeks">
					{weeks}
				</div>
			);
		}
	});

	return NumberOfWeeks;
});
