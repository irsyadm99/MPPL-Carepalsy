const { Router } = require('express')

const { authRoute } = require('./auth')
const { postRoute } = require('./post')
const { commentRoute } = require('./comment')

const auth = require('../middleware/auth')

module.exports = () => {
    const route = Router()

    route.get('/ping', (_, res) => {
        return res.status(200).json({
            message: "hello"
        })
    })

    route.get('/protected', auth, (_, res) => {
        return res.status(200).json({
            message: "hello",
            id: res.locals.auth
        })
    })

    authRoute(route)
    postRoute(route)
    commentRoute(route)

    return route
}