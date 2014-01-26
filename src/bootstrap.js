define(["react", "widget/Widget", "jsx!widget/views/Widget"], function(React, Widget, WidgetView) {
	"use strict";

	var widget = new Widget();

	React.renderComponent(<WidgetView model={widget} />, document.getElementById("container"));
});
