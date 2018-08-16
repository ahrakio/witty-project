const spawn = require('child_process').spawn;
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path');

var child = null;
var index = -1;

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
        new webpack.ProgressPlugin(function(percentage, msg) {
            if (percentage === 0) {
                if (child !== null) {
                    child.kill('SIGKILL');
                    child = null;
                }
            } else if (percentage === 1) {
                var args = [
                    'dist/index.js'
                ];

                if ((index = process.argv.indexOf('--port')) !== -1 && typeof process.argv[index + 1] !== 'undefined') {
                    args.push(parseInt(process.argv[index + 1]));
                }

                child = spawn('node', args);
            }
        })
    ],
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000
    }
};
