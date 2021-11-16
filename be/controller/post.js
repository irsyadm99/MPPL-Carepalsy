const PostModel = require('../model/post')
const constant = require('../constant')

exports.index = async (_req, res) => {

    const posts = await PostModel.find({ archived: false }).lean()

    return res.status(200).json({
        posts
    })
}
exports.withComment = async (_req, res) => {

    const posts = await PostModel.aggregate([{
        $match: {
            archived: false
        }
    }, {
        $lookup: {
            from: constant.collection.COMMENT,
            localField: "_id",
            foreignField: "postId",
            as: "comments"
        },
    },])

    return res.status(200).json({
        posts
    })
}

exports.myPost = async (req, res) => {

    const { isArchived } = req.params

    const filter = {
        userId: res.locals.auth,
        archived: (isArchived == 'true' ? true : false)
        // ...(isArchived ? { archived: (isArchived == 'true' ? true : false ) } : {})
    }

    const posts = await PostModel.find(filter).lean()

    return res.status(200).json({
        posts
    })
}

exports.create = async (req, res) => {

    const { text } = req.body

    const post = await PostModel.create({
        text,
        date: new Date(),
        userId: res.locals.auth
    })

    return res.status(201).json({
        post
    })

}

exports.update = async (req, res) => {

    const { id } = req.params
    const { text } = req.body

    const post = await PostModel.findById(id)
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

    const post = await PostModel.findOne({ _id: id, archived: false })

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

    post.archived = true
    await post.save()

    return res.status(200).json({
        message: "deleted",
        post
    })
}

exports.restore = async (req, res) => {

    const { id } = req.params

    const post = await PostModel.findOne({ _id: id, archived: true })

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

    post.archived = false
    await post.save()

    return res.status(200).json({
        message: "restored",
        post
    })
}

exports.upvote = async (req, res) => {
    const { id } = req.params

    const post = await PostModel.findByIdAndUpdate(id, {
        $addToSet: { upvote: res.locals.auth },
        $pullAll: { downvote: [res.locals.auth] }
    }, { new: true })

    if (!post)
        return res.status(404).json({
            message: "post not found"
        })

    return res.status(200).json({
        id,
        post,
    })
}

exports.downvote = async (req, res) => {
    const { id } = req.params

    const post = await PostModel.findByIdAndUpdate(id, {
        $addToSet: { downvote: res.locals.auth },
        $pullAll: { upvote: [res.locals.auth] }
    }, { new: true })

    if (!post)
        return res.status(404).json({
            message: "post not found"
        })

    return res.status(200).json({
        id,
        post,
    })
}