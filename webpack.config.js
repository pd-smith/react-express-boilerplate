const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env = {}) => {
    const production = env === 'production';
    const plugins = [
        new ManifestPlugin({
            fileName: `${production ? 'production' : 'development'}Manifest.json`,
            publicPath: '/webpack/',
            map: (options) => {
                const newOptions = options;
                newOptions.name = path.parse(options.name).name;
                return newOptions;
            }
        })
    ];

    if (production) {
        plugins.push(
            new UglifyJSPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        );
    }

    return {
        entry: {
            home: './src/pages/home/HomeEntry.jsx'
        },
        output: {
            libraryTarget: 'umd',
            filename: `[name]-[hash]${production ? '.min.js' : '.js'}`,
            path: `${__dirname}/dist/static/webpack`
        },
        module: {
            loaders: [
                { test: /\.js?x$/, loader: 'babel-loader', exclude: /node_modules/ }
            ]
        },
        plugins,
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.json'
            ]
        }
    };
};
