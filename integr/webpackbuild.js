var config = require('./webpack.config.js');
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
config.devtool = 'cheap-module-source-map';

config.plugins[0].definitions.__DEV__ = false;
config.plugins[0].definitions.__IsLocal__ = false;
config.plugins[0].definitions["process.env"] = { 'NODE_ENV': '"production"' };

config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
config.plugins.push(new webpack.optimize.DedupePlugin());
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        output: { comments: false },
        minimize: true,
        sourceMap: false,
        exclude: [/node_modules/]
    })
)


config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        filename: 'js/common.js',
        async: 'common',
        minChunks(module, count) {
            return count >= 2;
        },
    })
)

config.plugins.push(
    new CleanWebpackPlugin(
        path.join(__dirname + "/build/")
    )
);


webpack(config).watch({ aggregateTimeout: 300, poll: true }, (err, stats) => {
    console.log(err);
    var buildLog = stats.toString({ colors: true, modulesSort: "name" });
    console.log(buildLog);
}); // pew