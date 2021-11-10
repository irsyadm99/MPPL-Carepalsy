const {model, Schema} = require('mongoose')
const constant = require('../constant')

const PostSchema = new Schema(
    {
        text: {
            type: String,
            required: [true, 'text harus ada']
        },
        date: {
            type: Date,
            required: true,
        },
        upvote: [{
            type: Schema.Types.ObjectId,
            ref: constant.model.USER,
        }],
        downvote: [{
            type: Schema.Types.ObjectId,
            ref: constant.model.USER,
        }],
        userId: {
            type: Schema.Types.ObjectId,
            ref: constant.model.USER,
            required: true,
        },
        archived: {
            type: Boolean,
            default: false,
        }
    }
)

module.exports = model(
    constant.model.POST,
    PostSchema,
    constant.collection.POST
)