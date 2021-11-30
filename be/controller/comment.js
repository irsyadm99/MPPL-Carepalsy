const CommentModel = require('../model/comment')

exports.index = async (req, res) => {

    const { populatePost, populateUser } = req.query

    const comments = await CommentModel.find()
        .populate(...(populateUser == 'true' ? ['userId', '-password'] : ['']))
        .populate(...(populatePost == 'true' ? ['postId'] : ['']))
        .lean()

    return res.status(200).json({
        comments
    })
}

exports.get = async (req, res) => {

    const { id } = req.params
    const { populatePost, populateUser } = req.query

    const comment = await CommentModel.findById(id)
        .populate(...(populateUser == 'true' ? ['userId', '-password'] : ['']))
        .populate(...(populatePost == 'true' ? ['postId'] : ['']))
        .lean()

    return res.status(200).json({
        comment
    })
}

exports.create = async (req, res) => {

    try {

        const { text, postId } = req.body

        const comment = new CommentModel()
        comment.text = text
        comment.date = new Date()
        comment.postId = postId
        comment.userId = res.locals.auth
        await comment.save()

        return res.status(201).json({
            comment
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

exports.update = async (req, res) => {

    const { id } = req.params
    const { text } = req.body

    const comment = await CommentModel.findById(id)
    if (!comment) {
        return res.status(404).json({
            message: "comment not found"
        })
    }

    // if (String(comment.userId) != String(res.locals.auth)) {
    //     return res.status(403).json({
    //         message: 'tidak ada izin'
    //     })
    // }

    comment.text = text
    await comment.save()

    return res.status(201).json({
        comment
    })

}

exports.delete = async (req, res) => {

    const { id } = req.params

    const post = await CommentModel.findOne({ _id: id, archived: false })

    if (!post) {
        return res.status(404).json({
            message: "post not found"
        })
    }

    // if (String(post.userId) != String(res.locals.auth)) {
    //     return res.status(403).json({
    //         message: 'tidak ada izin'
    //     })
    // }

    await post.delete()

    return res.status(200).json({
        message: "deleted",
        post
    })
}