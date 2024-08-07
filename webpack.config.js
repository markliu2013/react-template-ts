const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), // the bundle output path
    filename: 'main.js' // the name of the bundle
  },
  // import App from './App';
  // import的时候不用加后缀
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // to import index.html file inside index.js
    })
  ],
  devServer: {
    port: 3035 // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
};
