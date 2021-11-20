const { Router } = require('express')

const controller = require('../controller/post')
const { validateBody, schemas } = require('../validation/post')

const auth = require('../middleware/auth')
const mongoidcheck = require('../middleware/mongoidcheck')

const route = Router()

exports.postRoute = (app) => {
    app.use('/post', route)

    route.get('/', controller.index)
    route.get('/:id', mongoidcheck, controller.post)
    route.get('/withComment', controller.withComment)
    route.get('/self', auth, controller.myPost)
    route.post('/', auth, validateBody(schemas.create), controller.create)
    route.put('/:id', auth, mongoidcheck, validateBody(schemas.create), controller.update)
    route.delete('/:id', auth, controller.delete)
    route.get('/restore/:id', auth, mongoidcheck, controller.restore)
    route.get('/upvote/:id', auth, mongoidcheck, controller.upvote)
    route.get('/downvote/:id', auth, mongoidcheck, controller.downvote)
}