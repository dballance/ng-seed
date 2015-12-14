var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var path = require("path");
var webpack = require("webpack");

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


//Config
module.exports = {
	devtool: "source-map",
	debug: true, 
	
	devServer: {
		//historyApiFallback: true,
		contentBase: "app/public",
		publicPath: "/build"
	},
	
	entry: {
		app: "./app/app.ts",
    vendor: [
      "jquery",
			"angular",
      "core-js"
		]
	},
	
	output: {
     path: root("build"),
     filename: "[name].js",
     sourceMapFilename: "[name].js.map",
     chunkFilename: "[id].chunk.js"
   },

  resolve: {
    extensions: ["",".ts",".js", ".json", ".css", ".html"]
  },
  
   module: {
    loaders: [
       // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },
      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw' },

      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts',
        query: { 'ignoreDiagnostics': [ 2403 ] }, // 2403 -> Subsequent variable declarations
        exclude: [ /\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/ ]
      }
    ]
  },
  
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' })
  ]
}

// Helper functions

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}