const jwt = require('jsonwebtoken')

const UserModel = require('../model/user')

module.exports = (type = 'user') => {
    return async function auth(req, res, next) {
        try {
            const { headers } = req

            if (!headers.authorization) {
                return res.status(401).json({ message: 'tidak ada izin' })
            }

            const token = String(headers.authorization).replace(/Bearer /, '')

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            const filter = {
                email: decoded.u,
                ...(type == 'admin' ? { isAdmin: true } : {}),
            }

            const id = await UserModel.findOne(filter).select('_id')

            if (!id) {
                return res.status(401).json({ message: 'tidak ada izin' })
            }

            res.locals.auth = id._id

            next()
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }
}