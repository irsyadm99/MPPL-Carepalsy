const { Router } = require('express')

const controller = require('../controller/faq')
const { validateBody, schemas } = require('../validation/faq')

const auth = require('../middleware/auth')
const mongoidcheck = require('../middleware/mongoidcheck')

const route = Router()

exports.faqRoute = (app) => {
    app.use('/faq', route)

    route.get('/', controller.index)
    route.post('/', auth('admin'), validateBody(schemas.create), controller.create)
    route.put('/:id', auth('admin'), mongoidcheck, validateBody(schemas.create), controller.update)
    route.delete('/:id', auth('admin'), mongoidcheck, controller.delete)
}