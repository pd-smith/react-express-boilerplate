const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = (env = {}) => {
    const production = env === 'production';
    const plugins = [
        new ManifestPlugin({
            fileName: `${production ? 'production' : 'development'}Manifest.json`,
            publicPath: '/webpack/',
            map: (options) => {
                options.name = path.parse(options.name).name;
                return options;
            }
        })
    ];
    production ? plugins.push(new UglifyJSPlugin()) : null;
    return {
        entry: {
            home: './src/pages/home/HomeEntry.jsx'
        },
        output: {
            libraryTarget: 'umd',        
            filename: `[name]${production ? '.min.js' : '.js'}`,
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
