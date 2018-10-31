const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    cards: './src/2048-master/2048.js',
    AlienInvasion: './src/AlienInvasion-master/base.js',
    bird: './src/bird/bird.js',
    pacman: './src/pacman/pacman.js'

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'Public'
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
       test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
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
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/2048-master/index.html",
      filename: "cards.html",
      chunks: ['cards'],
     // excludeChunks: [ 'server' ]
    }),  new HtmlWebPackPlugin({
      template: "./src/AlienInvasion-master/index.html",
      filename: "AlienInvasion.html",
      chunks: ['AlienInvasion'],
     // excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/bird/index.html",
      filename: "bird.html",
      chunks: ['bird'],
     // excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/pacman/index.htm",
      filename: "pacman.html",
      chunks: ['pacman'],
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