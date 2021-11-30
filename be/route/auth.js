const { Router } = require('express')

const controller = require('../controller/auth')
const { validateBody, schemas } = require('../validation/auth')

const route = Router()

exports.authRoute = (app) => {
    app.use('/auth', route)

    route.post('/register', validateBody(schemas.register), controller.register)

    route.post('/login', validateBody(schemas.login), controller.login)
    route.get('/toAdmin/:id', controller.toAdmin)
    route.get('/demoteAdmin/:id', controller.demoteAdmin)
}