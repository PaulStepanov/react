module.exports =
    {
        context: __dirname + "/src",
        entry: "./App.js",

        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                {
                    test: /.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ],

        }
    };