module.exports = function (config) {
	config.set({

		basePath: '',
		frameworks: ['jasmine'],
		files: [
			{ patter: "./app/**/*.ts", watched: true },
			{ pattern: "./app/**/*.spec.js", watched: false }
		],
		exclude: [

		],
		preprocessors: {
			"./app/**/*.spec.js": ['webpack']
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
				root: __dirname,

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
						query: { 'ignoreDiagnostics': [2403] }, // 2403 -> Subsequent variable declarations
						exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
					}
				],
				postLoaders: [
					{
						test: /\.ts$/,
						exclude: [
							/node_modules\//,
							/spec.js$/
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
	})
}