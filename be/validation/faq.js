const joi = require('joi')

const { validateBody } = require('../middleware/validate')

module.exports = {
    validateBody,
    schemas: {
        create: joi.object().keys({
            question: joi.string().required(),
            answer: joi.string().required(),
        })
    }
}