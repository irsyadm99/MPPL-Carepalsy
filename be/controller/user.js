const UserModel = require('../model/user')
const constant = require('../constant')

exports.index = async (_req, res) => {
    const users = await UserModel.find().select('-password').lean()

    return res.status(200).json({
        users,
    })
}

exports.get = async (req, res) => {

    const { id } = req.params

    const user = await UserModel.findById(id).select('-password').lean()

    if(!user) {
        return res.status(404).json({
            message: 'user not found',
        })
    }

    return res.status(200).json({
        user,
    })
}