const path = require('path');
const webpack = require('webpack');

//webpack.config.js
module.exports = (env) => {
    const environment = env || 'production';

    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        //bez tego nie widzi reacta - nie dołącza reacta do pliku app.bundle.js
        plugins: [
            new webpack.ProvidePlugin({
                "React": "react",
            }),
        ],
        module: {
            rules: [{
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [{
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};