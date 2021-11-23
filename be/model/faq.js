const {model, Schema} = require('mongoose')
const constant = require('../constant')

const FaqSchema = new Schema(
    {
        question: {
            type: String,
            required: [true, 'text harus ada']
        },
        answer: {
            type: String,
            required: [true, 'text harus ada'],
        },
    }
)

module.exports = model(
    constant.model.FAQ,
    FaqSchema,
    constant.collection.FAQ
)