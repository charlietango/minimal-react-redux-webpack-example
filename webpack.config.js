const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/js/client.js'),
  output: {
    path: path.resolve(__dirname, 'src/js/build'),
    filename: 'app.bundle.js',
    publicPath: 'build',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: 'style!css!sass',
        exclude: /node_modules/,
      }
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    inline: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
};

module.exports = config;
