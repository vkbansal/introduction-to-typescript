const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, 'index.ts'),
    context: __dirname,
    output: {
        filename: PROD ? 'bundle.[chunkhash].js' : 'bundle.js',
        hashDigestLength: 6,
        path: path.resolve(__dirname, 'build'),
        publicPath: PROD ? '/introduction-to-typescript/' : '/'
    },
    target: 'web',
    mode: PROD ? 'production' : 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$|\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(PROD ? 'styles.[contenthash:base64:6].css' : 'styles.css'),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './slides/00-main.hbs'),
            filename: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            'images/*.*'
        ])
    ]
};
