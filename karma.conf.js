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
		preprocessors: {
			'karma.tests.js': ['webpack', 'sourcemap']
		},
		reporters: ["dots", "coverage"],
		coverageReporter: {
			reporters: [
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
				root: path.join(__dirname, 'node_modules'),
				extensions: ['','.ts','.js','.json', '.css', '.html'],
				modulesDirectories: ["node_modules"],
				alias: {
					"app": "app"
				}
			},
			devtool: 'inline-source-map',
			module: {
				loaders: [
					// Support for *.json files.
					{ test: /\.json$/, loader: 'json-loader' },
					// Support for CSS as raw text
					{ test: /\.css$/, loader: 'raw-loader' },

					// support for .html as raw text
					{ test: /\.html$/, loader: 'raw-loader' },

					// Support for .ts files.
					{
						test: /\.ts$/,
						loader: 'ts-loader',
						query: { 'ignoreDiagnostics': [2403] }, // 2403 -> Subsequent variable declarations
						exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
					}
				],
				postLoaders: [
					{
						test: /\.ts$/,
						exclude: [
							/node_modules\//,
							/\.spec.js$/
						],
						loader: 'istanbul-instrumenter'
					}
				]
			},
			stats: { colors: true, reasons: true },
			debug: false,
		},
		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		},
		noResolve: false
	})
}