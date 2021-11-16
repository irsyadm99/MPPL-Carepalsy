module.exports = function (req, res, next) {
    const { id } = req.params

    if (id.length != 24) {
        return res.status(400).json({
            message: "id tidak sesuai"
        })
    }
    
    next()
}