const {model, Schema} = require('mongoose')
const constant = require('../constant')

const CommentSchema = new Schema(
    {
        text: {
            type: String,
            required: [true, 'text harus ada']
        },
        date: {
            type: Date,
            required: true,
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: constant.model.POST,
            required: [true, 'post id harus ada'],
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: constant.model.USER,
            required: true,
        },
    }
)

module.exports = model(
    constant.model.COMMENT,
    CommentSchema,
    constant.collection.COMMENT
)