const spawn = require('child_process').spawn;
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path');

var child = null;


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
                console.log('starts build');
                if (child !== null) {
                    console.log('>> Killing child with pid' + child.pid);
                    child.kill('SIGKILL');
                    console.log('>> Child killed ' + child.pid);
                    child = null;
                }
            } else if (percentage === 1) {
                console.log('>> 100% ');
                child = spawn('node', ['dist/index.js']);
            }
        })
    ],
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000
    }
};
