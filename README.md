# Webpack + Foundation Boilerplate

A Webpack boilerplate with Foundation framework

## Built With

* [Webpack](https://webpack.github.io/) - Webpack is a module bundler
* [Hot Module Replacement](https://webpack.github.io/docs/webpack-dev-server.html) - Hot Module Replacement load the updated modules and inject them into a running app
* [Brower-Sync](https://www.browsersync.io/) - Time-saving synchronised browser testing
* [Compass Mixins](https://github.com/Igosuki/compass-mixins) -  A collection of compass' stylesheet for bower dependencies and libsass
* [Foundation](http://foundation.zurb.com/sites/docs/) -  A Framework for any device, medium, and accessibility
* [FontAwesome](http://fontawesome.io/) -  The iconic font and CSS toolkit

## Usage

```
$ npm install
```

### Dev Server

Run a server to dev with Hot Module Replacement and Brower-Sync on localhost:3000
Load all modules into a virtual 'bundle.js' file

```
$ npm run dev-server
```

### Build

Autoprefix and minify css into 'app.css'
Uglify js into 'app.js'
Group fonts and images files in their own folder

```
$ npm run build
```

## Proxy

For load webpack on a custom proxy server add this code into the webpack config

```
proxy: {
    '/': {
        target: 'http://localhost:8888'
    }
}
```
