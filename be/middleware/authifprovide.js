const jwt = require('jsonwebtoken')

const UserModel = require('../model/user')

module.exports = async (req, res, next) => {

    try {
        const { headers } = req
    
        if (!headers.authorization) {
            next()
            return
        }
    
        const token = String(headers.authorization).replace(/Bearer /, '')
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
        const id = await UserModel.findOne({ email: decoded.u }).select('_id')
    
        if (!id) {
            next()
            return
        }
    
        res.locals.auth = id._id
    
        next()
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}