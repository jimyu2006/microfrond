const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const common = require('./webpack.common.js');
const packageJson = require("../package.json");

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3001/remoteEntry.js'
            },
            shared: Object.keys(packageJson.dependencies),
        }),
    ],
};
      
module.exports = merge(common, devConfig);