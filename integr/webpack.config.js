const path = require("path");
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const chalk = require("chalk");

module.exports = {
    entry: [
        './src/js/App.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build/'),
        filename: "js/bundle.js",
        publicPath: '/',
        chunkFilename: "js/[name].js"
    },

    resolve: {
        modules: [
            path.resolve(__dirname, "src/js"),
            "node_modules"  
        ],
        alias: {
            components: path.resolve(__dirname, 'src/js/components'),
            containers: path.resolve(__dirname, 'src/js/containers'),
            controls: path.resolve(__dirname, 'src/js/controls/index.js')
        },
        extensions: [".jsx", ".js", ".json", ".*"]
    },



    module: {
        rules: [
            {
                test: /(\.js||\.jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },

        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEV__: true
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Actions: "Actions",
            Utils: "Utils"
        }),
        new ProgressBarPlugin({
            format: chalk.green(':msg')
            + " "
            + chalk.white(':bar')
            + chalk.yellow.bold(':percent')
            + ' (:elapsed seconds) ',
            clear: true
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: 'index.html'
            }
        ]),

       
    ],
 
    devtool: 'eval-source-map'


}