// https://webpack.js.org/guides/development/
// https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  root:  __dirname,
	app: path.join(__dirname, 'App'),
	dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: [
    './index.jsx',
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATHS.root,
    //hot: true,
    inline: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader' + (process.env.NODE_ENV === 'production' ? '?minimize' : ''),
            'sass-loader' + (process.env.NODE_ENV === 'production' ? '?minimize' : '')
          ],
        }),
      },
      {
        test: /\.(jsx)$/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        collapseWhitespace: false,
        collapseInlineTagWhitespace: false,
        removeComments: false,
        removeRedundantAttributes: false
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
