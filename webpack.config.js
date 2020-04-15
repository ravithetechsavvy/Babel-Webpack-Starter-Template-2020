const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// require("babel-register");

// Webpack Configuration
module.exports = {
  // Entry File
  entry: './src/app.js',
  //Output path
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    // Loaders
    rules: [
      // Javascript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Css files
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      // Sass files
      {
        test: /\.scss$/,
        use: 'sass-loader'
      },
      // Typescript files
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  // Plugins
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    hash: true
  })],
  // OPTIONAL
  // Reload On File Change
  watch: true,
  // Development Tools (Map Errors To Source File)
  // devtool: 'source-map',
  // Mode type
  mode: 'production'
};