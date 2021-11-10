const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserModel = require('../model/user')

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (await UserModel.exists({ email })) {
            return res.status(400).json({
                message: "email sudah ada",
            })
        }

        const user = new UserModel()
        user.name = name
        user.email = email
        user.password = await bcrypt.hash(password, 8)

        await user.save()

        return res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    if (user == null) {
        return res.status(404).json({
            message: "login failed"
        })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(404).json({
            message: "login failed"
        })
    }

    const token = await jwt.sign(
        { u: user.email, i: process.env.JWT_IDENTIFIER, },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    )

    return res.status(200).json({
        token
    })
}