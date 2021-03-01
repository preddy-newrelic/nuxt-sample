import newrelic from 'newrelic'
const util = require('util')

export default function NewRelicModule(moduleOptions) {
    const { nuxt } = this

    //console.log(nuxt.options)

    //TODO if newrelic module disabled, return

    // My nuxt module code goes here
    // [...]
    nuxt.hook('ready', async nuxt => {
        // Your custom code here
    })

    nuxt.hook('error', async error => {
        // Your custom code here
    })

    nuxt.hook('render:route', async (url, result, context) => {
        // Your custom code here
        console.log("routing to url: " + url)
    })

    //this.nuxt.hook('render:setupMiddleware', app => app.use(Sentry.Handlers.requestHandler()))
    this.nuxt.hook('render:setupMiddleware', app => app.use(function (req, res, next) {
        console.log('Time:', Date.now())
        //console.log(util.inspect(req, {showHidden: false, depth: 1}))
        next()
    }))

    this.nuxt.hook('render:errorMiddleware', app => app.use(function (error, req, res, next) {
        newrelic.noticeError(error)
        next(error)
    }))

    /*
    this.nuxt.hook('generate:routeFailed', ({ route, errors }) => {
        errors.forEach(({ error }) => Sentry.withScope((scope) => {
            scope.setExtra('route', route)
            Sentry.captureException(error)
        }))
    })
    */

}