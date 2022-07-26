const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    open: true,
    static: path.join(__dirname, 'src'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'app',
    template: 'index.html',
  })],
};
