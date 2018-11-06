const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    cards: './src/2048-master/2048.js',
    alienInvasion: './src/AlienInvasion-master/base.js',
    bird: './src/bird/bird.js',
    pacman: './src/pacman/pacman.js',
    travel: './src/travel/travel.js'


  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public'
},
  target: 'web',
  devtool: 'source-map',
  // Webpack 4 does not have a CSS minifier, although
  // Webpack 5 will likely come with one
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    
     
    
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
 
       
     
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // Loads images into CSS and Javascript files
       test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif|PNG)(\?v=\d+\.\d+\.\d+)?$/,
       exclude: /node_modules/,
        use: [{loader: "url-loader",
        options: {
          //loader: 'url-loader?limit=8192&name=images/[name].[ext]'
          // limit: 50000,
          // mimetype: "application/font-woff",
          //name: "./fonts/[name].[ext]", // Output below ./fonts
          // publicPath: "../", // Take the directory into account
        }}],
      },
      {
        // Loads CSS into a file when you import it via Javascript
        // Rules are set in MiniCssExtractPlugin
        test:/\.(sa|sc|c)ss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader',MediaQueryPlugin.loader,'sass-loader']
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
     // Hammer: "jquery-hammerjs/jquery.hammer.js"
  }),
//   new webpack.ProvidePlugin({
//     Hammer: "hammerjs"
// }),
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      chunks: ['main'],
    }),
    new HtmlWebPackPlugin({
      template: "./src/2048-master/index.html",
      filename: "cards.html",
      chunks: ['cards'],
     // excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/AlienInvasion-master/index.html",
      filename: "alienInvasion.html",
      chunks: ['alienInvasion'],
     // excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/bird/index.html",
      filename: "bird.html",
      chunks: ['bird'],
     // excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/pacman/index.html",
      filename: "pacman.html",
      chunks: ['pacman'],
     // excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/travel/index.html",
      filename: "travel.html",
      chunks: ['travel'],
     // excludeChunks: [ 'server' ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  //   new MediaQueryPlugin({
  //     include: [
  //         'src/2048-master/style/exam'
  //     ],
  //     queries: {
  //         'media, screen and (max-width: 520px)': 'mobile'
  //     }
  // })
  ]
}