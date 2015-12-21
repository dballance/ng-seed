var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var distPaths = {
    scripts: "js/",
    images: "img/"
}

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
     path: path.join( __dirname,  "dist"),
     filename:  distPaths.scripts + "[name].js",
     sourceMapFilename: distPaths.scripts+ "[name].js.map",
     chunkFilename: distPaths.scripts + "[id].chunk.js"
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
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Angular 1.x Typescript Webpack Seed',
      template: 'index.html',
      inject: 'body'
    })
  ]
}