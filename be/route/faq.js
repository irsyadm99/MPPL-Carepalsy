const { Router } = require('express')

const controller = require('../controller/faq')
const { validateBody, schemas } = require('../validation/faq')

// const auth = require('../middleware/auth')
const mongoidcheck = require('../middleware/mongoidcheck')

const route = Router()

exports.faqRoute = (app) => {
    app.use('/faq', route)

    route.get('/', controller.index)
    route.post('/', validateBody(schemas.create), controller.create)
    route.put('/:id', mongoidcheck, validateBody(schemas.create), controller.update)
    route.delete('/:id', mongoidcheck, controller.delete)
}