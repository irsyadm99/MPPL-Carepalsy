const joi = require('joi')

const { validateBody } = require('../middleware/validate')

module.exports = {
    validateBody,
    schemas: {
        register: joi.object().keys({
            name: joi.string().min(2).max(50).uppercase().required(),
            email: joi.string().email().trim().lowercase().required(),
            password: joi.string().min(8).required(),
        }),
        login: joi.object().keys({
            email: joi.string().email().trim().lowercase().required(),
            password: joi.string().min(8).required(),
        }),
    }
}