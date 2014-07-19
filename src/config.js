/* jshint unused: false */
var require = {
	baseUrl: "src",
	paths: {
		almond: "../bower_components/almond/almond",
		text: "../bower_components/requirejs-text/text",
		jsx: "../bower_components/jsx-requirejs-plugin/js/jsx",
		react: "../bower_components/react/react",
		jquery: "../bower_components/jquery/dist/jquery",
		JSXTransformer: "../bower_components/react/JSXTransformer",
		backbone: "../bower_components/backbone/backbone",
		"react.backbone": "../bower_components/react.backbone/react.backbone",
		underscore: "../bower_components/underscore/underscore"
	},
	shim: {
		jquery: {
			exports: "$"
		},
		backbone: {
			deps: ["underscore"],
			exports: "Backbone"
		},
		underscore: {
			exports: "_"
		}
	}
};
