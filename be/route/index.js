const { Router } = require('express')

const { authRoute } = require('./auth')
const { postRoute } = require('./post')
const { commentRoute } = require('./comment')
const { userRoute } = require('./user')
const { faqRoute } = require('./faq') 

const auth = require('../middleware/auth')

module.exports = () => {
    const route = Router()

    route.get('/ping', (_, res) => {
        return res.status(200).json({
            message: "hello"
        })
    })

    route.get('/protected', auth(), (_, res) => {
        return res.status(200).json({
            message: "hello",
            id: res.locals.auth
        })
    })

    route.get('/admin', auth('admin'), (_, res) => {
        return res.status(200).json({
            message: "hello admin",
            id: res.locals.auth
        })
    })

    authRoute(route)
    postRoute(route)
    commentRoute(route)
    userRoute(route)
    faqRoute(route)

    return route
}