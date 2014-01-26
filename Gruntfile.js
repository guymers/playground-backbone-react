module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		jshint: {
			options: {
				jshintrc: ".jshintrc"
			},
			gruntfile: {
				src: "Gruntfile.js"
			},
			sourcefiles: {
				src: ["src/**/*.js"]
			}
		},

		jsvalidate: {
			options: {
				globals: {},
				esprimaOptions: {},
				verbose: false
			},
			targetName: {
				files: {
					src: ["<%=jshint.sourcefiles.src%>"]
				}
			}
		},

		requirejs: {
			options: {
				baseUrl: "src",
				mainConfigFile: "src/config.js",
				//optimize: "none",
				skipDirOptimize: true,
				removeCombined: true,
				findNestedDependencies: true
			},

			build: {
				options: {
					name: "almond",
					include: "main",
					exclude: ["jsx", "JSXTransformer"],
					out: "build/main.js",
					onBuildRead: function(moduleName, path, contents) {
						if (moduleName === "JSXTransformer") {
							// prevent r.js from removing 'use strict' checks
							contents = contents.replace(/=== 'use strict'/g, "=== 'use ' + 'strict'");
							contents = contents.replace(/append\('"use strict";',/g, "append('\"use ' + 'strict\";',");
						}
						return contents;
					},
					onBuildWrite: function(moduleName, path, contents) {
						return contents.replace(/(['"])jsx!/g, "$1");
					}
				}
			}
		},

		dom_munger: {
			build: {
				options: {
					remove: "script[data-requirejs-config]",
					update: {
						selector: "script[data-main]",
						attribute: "src",
						value: "main.js"
					}
				},
				src: "index.html",
				dest: "build/index.html"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-jsvalidate");
	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-dom-munger");

	grunt.registerTask("check", ["jshint", "jsvalidate"]);
	grunt.registerTask("build", ["requirejs", "dom_munger"]);
};
