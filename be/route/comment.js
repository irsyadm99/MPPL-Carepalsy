const { Router } = require('express')

const controller = require('../controller/comment')
const { validateBody, schemas } = require('../validation/comment')

const auth = require('../middleware/auth')

const route = Router()

exports.commentRoute = (app) => {
    app.use('/comment', route)

    route.get('/', controller.index)
    route.post('/', auth(), validateBody(schemas.create), controller.create)
    route.get('/:id', controller.get)
    route.put('/:id', auth(), validateBody(schemas.update), controller.update)
    route.delete('/:id', auth('admin'), controller.delete)
}