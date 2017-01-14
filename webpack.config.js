const path = require('path'),
  webpack = require('webpack'),
  json_package = require('./package.json'),
  gitRevSync = require('git-rev-sync'),
  NODE_ENV = require('./client/js/constants').NODE_ENV,
  isProduction = process.env.NODE_ENV === NODE_ENV.PRODUCTION,
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractPlugin = require('extract-text-webpack-plugin'),
  ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin'),
  cwd = path.join(__dirname, 'client'),
  out_dir = '',
  app_bundle_path = `${out_dir}js/mm.app.js`,
  vendor_bundle_path = `${out_dir}js/mm.vendor.js`,
  fonts_path = `${out_dir}fonts/[name].[ext]`,
  css_bundle_path = `${out_dir}css/mm.bundle.css`;

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || NODE_ENV.LOCALHOST)
  }),
  new HtmlWebpackPlugin({
    favicon: path.join(cwd, 'favicon.ico'),
    filename: `${out_dir}index.html`,
    'GIT_BRANCH': gitRevSync.branch(),
    'GIT_LONG': gitRevSync.long(),
    'VERSION': json_package.version,
    template: path.join(cwd, 'ejs/index.ejs'),
    inject: 'body'
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  }),
  new ExtractPlugin(isProduction ? `${css_bundle_path}?[chunkhash]` : css_bundle_path),
  new webpack.optimize.CommonsChunkPlugin(
    'vendor',
    isProduction ? `${vendor_bundle_path}?[chunkhash]` : vendor_bundle_path,
    Infinity
  )
];
if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: false
  }));
}


module.exports = {
  
  entry: {
    app: path.join(cwd, 'index.jsx'),
    vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'react-intl']
  },
  
  output: {
    path: path.join(__dirname, '../dist'),
    filename: app_bundle_path,
  },

  module: {
    loaders: [
      {
        test: /\.less$/,
        include: [cwd],
        loader: ExtractPlugin.extract('css!less')
      },
      {
        test: /\.jsx?$/,
        include: [cwd],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [path.join(cwd, 'fonts')],
        loader: `file-loader?name=${fonts_path}${isProduction ? '?[hash]' : ''}`
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: true,
    contentBase: cwd
  }
};
