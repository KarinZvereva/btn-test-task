const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = true
const OUTPUT_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')
const PUBLIC_PATH = '/'

const jsName = 'assets/js/' + (devMode ? '[name].js' : '[name]-[chunkhash].js')

const plugins = [
    new HtmlWebpackPlugin({
        template: 'index.html',
        inject: false,
    }),
]

module.exports = {
    mode: devMode ? 'development' : 'production',

    context: APP_DIR,

    entry: {
        app: ['index.tsx'],
    },

    output: {
        path: OUTPUT_DIR,
        filename: jsName,
        publicPath: PUBLIC_PATH,
    },

    resolve: {
        modules: [APP_DIR, 'node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    plugins,

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader'],
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [require('autoprefixer')]
                            },
                        },
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                    },
                ],
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=1000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },

    devServer: {
            port: 8080,
        },
}
