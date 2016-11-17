// - - - - - - - - - - - - - - - - - -
//  WEBPACK > DEV
// - - - - - - - - - - - - - - - - - -
var path = require('path')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var SimpleProgressPlugin = require('webpack-simple-progress-plugin')
var chalk = require('chalk')

// Config
// - - - - - - - - - - - -
var config = {
    entryApp: [
        './src/js/app.js',
        './src/scss/app.scss'
    ],
    publicPath: 'www',
    bundleJs: 'bundle.js'
}

// Webpack
// - - - - - - - - - - - -
var webpackDev = {
    entry: config.entryApp,
    output: {
        path: path.join(__dirname, config.publicPath),
        filename: config.bundleJs,
        publicPath: '/'
    },
    devServer: {
        contentBase: config.publicPath
    },
    module: {
        preLoaders: [
            // ES-LINT
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            },
            // SASS-LINT
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'sasslint'
            },
            // HTML-LINT
            {
                test: /\.html/,
                loader: 'htmlhint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            // SCSS
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
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
            // IMAGES
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            },
            // FOUNDATION JS
            {
                test: /(foundation\.core)/,
                loader: 'exports?foundation=jQuery.fn.foundation'
            },
            // SVG
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            },
            // WOFF
            {
                test: /\.(woff|woff2?)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=application/font-woff'
            },
            // TTF
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=application/octet-stream'
            },
            // EOT
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            // MODERNIZR
            {
                test: /\.modernizrrc$/,
                loader: 'modernizr'
            }
        ]
    },
    // Es-lint Config
    eslint: {
        configFile: path.resolve(__dirname, '.eslintrc')
    },
    // Sass-lint Config
    sasslint: {
        failOnWarning: false,
        failOnError: true,
        configFile: 'build/.sass-lint.yml'
    },
    // Html-hint
    htmlhint: {
        configFile: 'build/.htmlhintrc'
    },
    // Add Source-map
    devtool: 'source-map',
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
        // Add a progress bar in the terminal
        new SimpleProgressPlugin({
            messageTemplate: chalk.yellow.bold('> build ') + chalk.green(':percent') + ' :bar (:elapsed seconds)',
            progressOptions: {
                complete: chalk.bgGreen(' '),
                incomplete: chalk.bgBlack(' '),
                clear: false
            }
        }),
        // Load Browser-sync to reload Html & Php files
        new BrowserSyncPlugin({
            files: ['**/*.php', '**/*.html'],
            host: 'localhost',
            port: 3000,
            // proxying WebpackDevServer
            proxy: 'http://localhost:8080'
        }, {
            reload: false
        })
    ]
}

// Init
// - - - - - - - - - - - -
module.exports = webpackDev
