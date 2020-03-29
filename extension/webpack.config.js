// This is configuration for the extension as we don't use webpack for the server code.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const sourceRootPath = path.join(__dirname, 'src');
const distRootPath = path.join(__dirname, 'dist');
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';


module.exports = {
    watch: nodeEnv === 'watch',
    entry: {
        'background': path.join(sourceRootPath, 'background.ts'),
        'popup': path.join(sourceRootPath, 'popup/popup.tsx'),
        'content': path.join(sourceRootPath, 'content/content.ts')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.(js|ts|tsx)?$/, loader: 'ts-loader', exclude: /node_modules/},
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    output: {
        filename: '[name].js',
        path: distRootPath,
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(sourceRootPath, 'assets'),
                to: path.join(distRootPath, 'assets'),
                test: /\.(jpg|jpeg|png|gif|svg)?$/,
            },
            {
                from: path.join(sourceRootPath, 'manifest.json'),
                to: path.join(distRootPath, 'manifest.json'),
                toType: 'file',
            }
        ], {copyUnmodified: true}),
        new HtmlWebpackPlugin({
            template: path.join(sourceRootPath, 'popup/popup.html'),
            inject: 'body',
            filename: 'popup.html',
            chunks: ['popup'],
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanStaleWebpackAssets: false
        }),
    ],
};