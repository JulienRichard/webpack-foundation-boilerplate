// - - - - - - - - - - - - - - - - - -
//  WEBPACK > BUILD
// - - - - - - - - - - - - - - - - - -
var webpack = require('webpack')
var path = require('path')
var SimpleProgressPlugin = require('webpack-simple-progress-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var chalk = require('chalk')

// Global Config
// - - - - - - - - - - - -
var config = {
    entryApp: [
        './src/js/app.js',
        './src/scss/app.scss'
    ],
    publicPath: '../www/assets',
    outputJs: 'js/app.js',
    outputCss: 'css/app.css',

    postcss: [
        require('css-mqpacker'),
        require('autoprefixer')({browsers: ['last 2 versions', 'ie > 9']})
    ]
}

// Webpack
// - - - - - - - - - - - -
var webpackBuild = {
    entry: config.entryApp,
    output: {
        path: path.join(__dirname, config.publicPath),
        filename: config.outputJs
    },
    module: {
        loaders: [
            // SCSS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            },
            // JS
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'stage-2'],
                    compact: true
                }
            },
            // HTML
            {
                test: /\.html$/,
                loader: 'html'
            },
            // FOUNDATION JS
            {
                test: /(foundation\.core)/,
                loader: 'exports?foundation=jQuery.fn.foundation'
            },
            // MODERNIZR
            {
                test: /\.modernizrrc$/,
                loader: 'modernizr'
            },
            // IMAGES
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=50000&name=img/[name].[ext]'
            },
            // SVG
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?&name=fonts/[name].[ext]&mimetype=image/svg+xml'
            },
            // WOFF
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?&name=fonts/[name].[ext]&mimetype=application/font-woff'
            },
            // WOFF2
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?&name=fonts/[name].[ext]&mimetype=application/font-woff'
            },
            // TTF
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?&name=fonts/[name].[ext]&mimetype=application/octet-stream'
            },
            // EOT
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?&name=fonts/[name].[ext]'
            }
        ]
    },
    // PostCss Config
    postcss: function () {
        return config.postcss
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            foundation: 'foundation-sites/js/foundation.core',
            modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
    },
    externals: {
        jQuery: 'jQuery',
        foundation: 'Foundation'
    },
    plugins: [
        new SimpleProgressPlugin({
            messageTemplate: chalk.yellow.bold('> build ') + chalk.green(':percent') + ' :bar (:elapsed seconds)',
            progressOptions: {
                complete: chalk.bgGreen(' '),
                incomplete: chalk.bgBlack(' '),
                width: 40,
                total: 100,
                clear: false
            }
        }),
        new ExtractTextPlugin(config.outputCss),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        })
    ]
}

// Init
// - - - - - - - - - - - -
module.exports = webpackBuild
