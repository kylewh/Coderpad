/* eslint-disable */
const pkg = require("./package.json");
const webpack = require("webpack");
const path = require("path");
const HappyPack = require("happypack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const VENDOR_LIST = ["react", "redux", "redux-logger", "react-dom"];

// entry: [
//   "webpack-dev-server/client?http://localhost:8080",
//   "webpack/hot/only-dev-server",
//   "./src/index.js"
// ],

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: Object.keys(pkg.dependencies)
  },
  // devtool: "cheap-module-source-map",
  output: {
    // // filename: "[name].[chunkhash].js",
    // filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name]-[chunkhash].js"
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
  node: {
    fs: "empty" // For error: Can't resolve 'fs' in /node_modules/browserslist
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js?$/,
        exclude: /node_modules/,
        loaders: ["happypack/loader?id=buildStuff"]
        // loaders: ["react-hot-loader", "babel-loader"] //"eslint-loader"
      },
      {
        test: /\.css$/,
        loaders: ["happypack/loader?id=css"]
        // loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["happypack/loader?id=scss"]
        // loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
      title: "CoderPad"
    }),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
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
