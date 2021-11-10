require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

const mongoose = require('./mongoose')
const route = require('./route')

mongoose()

app.use(cors())
app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1', route())


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})