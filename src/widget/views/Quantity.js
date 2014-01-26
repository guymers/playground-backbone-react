define(["react.backbone"], function(React) {
	"use strict";

	var Quantity = React.createBackboneClass({
		changeOptions: "change:quantity",

		updateQuantity: function(event) {
			this.model().set("quantity", event.target.value);
		},

		render: function() {
			var id = "quantity";

			return (
				<div className="quantity">
					<label htmlFor={id}>Quantity</label>
					<input type="text" id={id} name="quantity" value={this.model().get("quantity")} onChange={this.updateQuantity}/>
				</div>
			);
		}
	});

	return Quantity;
});
