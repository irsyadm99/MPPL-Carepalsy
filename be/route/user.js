const { Router } = require('express')

const controller = require('../controller/user')
const mongoidcheck = require('../middleware/mongoidcheck')
// const { validateBody, schemas } = require('../validation/auth')

const route = Router()
exports.userRoute = (app) => {
    app.use('/user', route)

    route.get('/', controller.index)
    route.get('/:id', mongoidcheck, controller.get)
}