var path = require("path");

module.exports = function (config) {
	config.set({

		basePath: '',
		frameworks: ['jasmine'],
		files: [
			 { pattern: 'karma.tests.js', watched: false }
		],
		exclude: [

		],
		plugins: [
			require("karma-jasmine"),
			require("karma-coverage"),
			require("karma-chrome-launcher"),
			require("karma-sourcemap-loader"),
			require("karma-webpack")	
		],
		preprocessors: {
			'karma.tests.js': ['webpack', 'sourcemap'],
			'app/**/*.ts': ['coverage']
		},
		reporters: ["dots", "coverage"],
		coverageReporter: {
			reporters: [
				{ type: 'json'},
				{ type: 'html' }
			]
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		singleRun: true,
		browsers: ['Chrome'],
		webpack: {
			resolve: {
				cache: false,
				root: __dirname,
				extensions: ['','.ts','.js','.json', '.css', '.html'],
				//modulesDirectories: ["app", "node_modules"]
			},
			devtool: 'inline-source-map',
			module: {
				loaders: [
					// Support for *.json files.
					{ test: /\.json$/, loader: 'json' },
					// Support for CSS as raw text
					{ test: /\.css$/, loader: 'raw' },

					// support for .html as raw text
					{ test: /\.html$/, loader: 'raw' },

					// Support for .ts files.
					{
						test: /\.ts$/,
						loader: 'ts',
						query: {  
							'ignoreDiagnostics': [
                				2403, // 2403 -> Subsequent variable declarations
                				2300, // 2300 Duplicate identifier
                				2374, // 2374 -> Duplicate number index signature
                				2375  // 2375 -> Duplicate string index signature
              			]},
						exclude: [/\.e2e\.ts$/, /node_modules/]
					}
				],
				postLoaders: [
					{
						test: /\.ts$/,
						exclude: [
							/node_modules\//,
							/\.spec.ts$/
						],
						loader: 'istanbul-instrumenter'
					}
				]
			},
			stats: { colors: true, reasons: true },
			debug: false,
		},
		// webpackServer: {
		// 	noInfo: true //please don't spam the console when running in karma!
		// },
		noResolve: false
	})
}