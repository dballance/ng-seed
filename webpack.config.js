var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var path = require("path");
var webpack = require("webpack");
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;



//Config
module.exports = {
	devtool: "source-map",
	debug: true, 
    
    devServer: {
        historyApiFallback: true,
        contentBase: "http://localhost/",
        inline:"true",
        publicPath: "/"
    },
	
	entry: {
		app: "./app/app.ts",
        vendor: [
            "jquery",
	        "angular"
		]
	},
	
	output: {
     path: root("dist"),
     publicPath: "/",
     filename: "js/[name].js",
     sourceMapFilename: "js/[name].js.map",
     chunkFilename: "[id].chunk.js"
   },

  resolve: {
      extensions: ["",".ts",".js", ".json", ".css", ".html"]
  },
  
   module: {
    loaders: [
      { test: /\.json$/,  loader: 'json' },
      { test: /\.less$/, loader: "style!css!less-loader"},
      {test: /\.(png|jpg)$/, loader: 'url?prefix=img/&name=img/[hash].[ext]&limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.html$/,  loader: 'html' },

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
        exclude: [ /\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/ ]
      }
    ]
  },
  
  plugins: [
    // new CommonsChunkPlugin({ name: 'vendor', filename: '/js/vendor.js' }),
    // new CommonsChunkPlugin({ name: 'common',   filename: '/js/common.js' }),
    //new webpack.optimize.UglifyJsPlugin(),
    new Clean(['dist']),
    new HtmlWebpackPlugin({
      title: 'Angular 1.x Typescript Webpack Seed',
      template: 'index.html',
      inject: 'body',
      filename: "index.html"
    })
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