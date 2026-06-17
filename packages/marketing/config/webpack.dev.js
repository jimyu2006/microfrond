const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const common = require("./webpack.common.js");
const packageJson = require("../package.json");


const devConfig = {
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: Object.keys(packageJson.dependencies),
    }),
  ],
};

module.exports = merge(common, devConfig);
