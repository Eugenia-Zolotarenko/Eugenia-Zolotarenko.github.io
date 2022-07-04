const path =                 require('path')
const HtmlWebpackPlugin =    require('html-webpack-plugin')
const CopyWebpackPlugin =    require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin =   require('css-minimizer-webpack-plugin')
const TerserPlugin =         require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development'

const filename = ext => isDev?`[name].bundle.${ext}`: `[name].[contenthash].bundle.${ext}`


const optimization = ()=> {
    const config = {}
    if(!isDev) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
        config.splitChunks = {
            chunks: 'all'
        }
    }

    return config;
}

const cssLoaders = extra => {
    const loaders = [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
}

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        main: ['./scripts/template.js', './scripts/script.js']
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ]
    },
    optimization: optimization(),
    devServer: {
        static: './dist',
        port: 63342
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename('js'),
        clean: true,
    },
    devtool: isDev ? 'inline-source-map' : 'nosources-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
       /* new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'app/img/faviconka.ico'),
                    to:   path.resolve(__dirname, 'dist')
                }
                ]
            }
        ),*/
        new MiniCssExtractPlugin({
            filename:  filename('css')
        })
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
    mode: 'development'
}