const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');


// Clean configurations
const clean_paths = [
    'dist'
];

const clean_options = {
    watch: true
};

module.exports = {
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'dist/index.js',
        path: path.resolve(__dirname, '..'),
    },
    target: 'node',
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(clean_paths, clean_options),
        new UglifyJsPlugin(),
    ],
    watchOptions: {
        aggregateTimeout: 1000,
    }
};
