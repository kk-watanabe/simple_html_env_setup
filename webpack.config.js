const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Sample',
      template: './src/smaple.html',
      filename: './smaple.html',
    }),
  ],
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
  }
}
