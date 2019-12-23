const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base=require('./webpack.config.base.js')

module.exports = {
  ...base,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

