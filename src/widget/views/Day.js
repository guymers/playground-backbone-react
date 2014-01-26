define(["react.backbone"], function(React) {
	"use strict";

	var Day = React.createBackboneClass({
		days: ["monday", "wednesday", "friday"],
		changeOptions: "change:day",

		updateDay: function(day) {
			this.model().set("day", day);
		},

		render: function() {
			var days = this.days.map(function(day) {
				var selected = this.model().get("day") == day;
				var id = "day_" + day;

				return (
					<div key={day}>
						<label htmlFor={id}>{day}</label>
						<input type="radio" id={id} name="day" value={day} checked={selected} onClick={this.updateDay.bind(null, day)}/>
						<br/>
					</div>
				);
			}, this);

			return (
				<div className="days">
					{days}
				</div>
			);
		}
	});

	return Day;
});
