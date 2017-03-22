var config = require('./webpack.config.js');
var webpack = require("webpack");
var webpackDevServer = require('webpack-dev-server');
var path = require('path');
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
);
config.plugins[0].definitions.__IsLocal__ = false;
config.plugins[0].definitions.__DEV__ = true;
config.entry = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8288',
    'webpack/hot/only-dev-server',
    './src/js/App.jsx'
]
var server = new webpackDevServer(webpack(config),
    {
        port: 8288,
        host: 'localhost',
        publicPath: '/',
        contentBase: 'build',
        hot: true
    }   
);

server.listen(8288);



