const CommentModel = require('../model/comment')

exports.index = async (_req, res) => {

    const comments = await CommentModel.find().lean()

    return res.status(200).json({
        comments
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

    const post = await CommentModel.findById(id)
    if (!post) {
        return res.status(404).json({
            message: "post not found"
        })
    }

    if (String(post.userId) != String(res.locals.auth)) {
        return res.status(403).json({
            message: 'tidak ada izin'
        })
    }

    post.text = text
    await post.save()

    return res.status(201).json({
        post
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

    if (String(post.userId) != String(res.locals.auth)) {
        return res.status(403).json({
            message: 'tidak ada izin'
        })
    }

    await post.delete()

    return res.status(200).json({
        message: "deleted",
        post
    })
}