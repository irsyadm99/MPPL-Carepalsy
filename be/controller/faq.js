const FaqModel = require('../model/faq')

exports.index = async (_req, res) => {

    const faqs = await FaqModel.find().lean()

    return res.status(200).json({
        faqs
    })
}

exports.create = async (req, res) => {

    const { answer, question } = req.body

    const faq = await FaqModel.create({
        answer, question
    })

    return res.status(201).json({
        faq
    })
}

exports.update = async (req, res) => {

    const { id } = req.params

    const { answer, question } = req.body

    const faq = await FaqModel.findByIdAndUpdate(id, {
        answer, question
    }, { new: true })

    return res.status(200).json({
        faq
    })
}

exports.delete = async (req, res) => {

    const { id } = req.params

    const faq = await FaqModel.findByIdAndRemove(id)

    return res.status(200).json({
        message: "faq deleted"
    })
}