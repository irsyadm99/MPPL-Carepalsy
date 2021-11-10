const {model, Schema} = require('mongoose')
const constant = require('../constant')

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'nama harus ada']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'nama harus ada']
        },
        password: {
            type: String,
            required: [true, 'nama harus ada']
        },
    }
)

module.exports = model(
    constant.model.USER,
    UserSchema,
    constant.collection.USER
)