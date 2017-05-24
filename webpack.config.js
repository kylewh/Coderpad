/* eslint-disable */
const webpack = require("webpack");
const path = require("path");
const HappyPack = require("happypack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIST = ["react", "redux", "redux-logger", "react-dom"];

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 8080
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".css"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js?$/,
        exclude: /node_modules/,
        loaders: ["happypack/loader?id=buildStuff"]
      },
      {
        test: /\.css$/,
        loaders: ["happypack/loader?id=css"]
      },
      {
        test: /\.scss$/,
        loaders: ["happypack/loader?id=scss"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
      title: "Netease Cloud Music"
    }),
    new HappyPack({
      id: "buildStuff",
      loaders: ["react-hot-loader", "babel-loader", "eslint-loader"]
    }),
    new HappyPack({
      id: "css",
      loaders: ["style-loader", "css-loader"]
    }),
    new HappyPack({
      id: "scss",
      loaders: ["style-loader", "css-loader", "sass-loader"]
    })
  ]
};
