// const favicon = require("serve-favicon");
const path = require('path')
require('express-async-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const utils = require('./utils')
// const middlewares = require('./middlewares');

const isLocal = process.env.NODE_ENV === 'local'
const staticPath = isLocal ? 'dist' : 'dist-prod'
let appConfig = null

// express
function initExpressApp(config) {
    appConfig = config

    if (!appConfig.appName) {
        throw new Error('App name missing')
    }
    global.appName = appConfig.appName

    let app = express()
    const cors = require('cors');
    app.use(cors({
        origin: appConfig.appBaseUrl
    }));

    // etag
    app.disable('etag')
    app.locals.settings['x-powered-by'] = false
    app.use(express.json())
    app.use(compression())

    let projectRootPath = appConfig.projectRootPath
    // if (isLocal) {
    //     app.use(favicon(path.join(projectRootPath, 'client', 'assets', 'favicon.ico')));
    // } else {
    //     app.use(favicon(path.join(projectRootPath, 'dist', 'assets', 'favicon.ico')));
    // }
    app.use(express.static(path.join(projectRootPath, staticPath)))

    app.use(express.json())
    app.use(express.urlencoded())
    app.use(cookieParser())

    if (isLocal) {
        const reload = require('reload')
        reload(app, {
            port: appConfig.build.reloadPort,
        })
    }
    return app
}

function useHandlebarsViewEngine(app) {
    const exphbs = require('express-handlebars')
    let projectRootPath = appConfig.projectRootPath
    // view engine setup
    let hbs = exphbs.create({
        extname: '.hbs',
        defaultLayout: 'layout',
        layoutsDir: path.join(projectRootPath, staticPath, 'views', 'layouts'),
        partialsDir: path.join(
            projectRootPath,
            staticPath,
            'views',
            'partials'
        ),
        helpers: utils.handlebarsHelpers,
    })
    app.set('views', path.join(projectRootPath, staticPath, 'views'))
    app.engine('hbs', hbs.engine)
    app.set('view engine', 'hbs')
    if (!isLocal) {
        app.set('view cache', true)
    }
}

// webpack dev
function addWebpackDevAndHotMiddleware(app) {
    if (!isLocal) {
        return
    }

    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    // const expressHandlebarsMemoryFs = require('express-handlebars-memory-fs');
    let webpackConfig = require('./build')

    let compiler = webpack(webpackConfig)
    let webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        writeToDisk: true,
    })

    webpackDevMiddlewareInstance.waitUntilValid(() => {
        console.log('\x1b[92m%s\x1b[0m', __dirname)
        console.log(
            '\x1b[92m%s\x1b[0m',
            `Server Listening on: http://localhost:${appConfig.appPort}/`
        )
    })

    let hotMiddlewareInstance = webpackHotMiddleware(compiler)
    // compiler.plugin('compilation', function (compilation) {
    //   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    //     //let cccc = compilation.getStats().toJson();
    //     hotMiddleware.publish({
    //       action: 'hbs-reload',
    //       data: data
    //     })
    //     if(cb){
    //       cb()
    //     }
    //   })
    // })

    app.use(webpackDevMiddlewareInstance)

    app.use(hotMiddlewareInstance)

    // expressHandlebarsMemoryFs(compiler.outputFileSystem);
}

function initAppMiddlewares(app) {
    app.use(middlewares.requestId)
}

function beforeInitAppRoutes(app) {
    // logger
    app.use(utils.logger.defaultLogger)
}

function afterInitAppRoutes(app) {
    app.use(middlewares.notFound)
    app.use(utils.logger.errorLogger)
    app.use(middlewares.error)
}

function createHttpServer(app) {
    let appPort = normalizePort()
    let server = app.listen(appPort)
    server.on('error', onError)

    // Normalize a port into a number, string, or false.
    function normalizePort() {
        let port = parseInt(appConfig.appPort, 10)
        if (isNaN(port)) {
            // named pipe
            return appConfig.appPort
        }
        if (port >= 0) {
            // port number
            return port
        }
        return false
    }

    // Event listener for HTTP server "error" event.
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error
        }

        let port = parseInt(appConfig.appPort, 10)
        let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges')
                process.exit(1)
                break
            case 'EADDRINUSE':
                console.error(bind + ' is already in use')
                process.exit(1)
                break
            default:
                throw error
        }
    }
}

module.exports = {
    initExpressApp,
    useHandlebarsViewEngine,
    addWebpackDevAndHotMiddleware,
    initAppMiddlewares,
    beforeInitAppRoutes,
    afterInitAppRoutes,
    createHttpServer,
}
