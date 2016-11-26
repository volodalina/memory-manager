const path = require('path'),
  webpack = require('webpack'),
  NODE_ENV = require('./js/constants').NODE_ENV,
  isProduction = process.env.NODE_ENV === NODE_ENV.PRODUCTION,
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  
  entry: {
    app: path.join(__dirname, 'index.jsx'),
    vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'react-intl']
  },
  
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: './'
  },

  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractPlugin.extract('css!less')
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../client'),
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.join(__dirname, '../client/fonts'),
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules|bower_components)/,
        loader: isProduction ? 'file?name=svg/[name].[ext]?[hash]' : 'file?name=svg/[name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'ejs/index.ejs'),
      inject: 'body'
    }),
    new ExtractPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../dist')
  }
};
