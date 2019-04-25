const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // entry: {
  //   a: './a.js',
  //   b: './b.js'
  // },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: "[name].bundle.js"
  // },
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "a.bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8089
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'SERVICE_URL': JSON.stringify('https://www.baidu.com')
    }),
    new HtmlWebpackPlugin({
      title: 'newIndex',
      filename: 'index.html',
      template: "index.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}