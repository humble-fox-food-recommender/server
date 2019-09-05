if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const { errorHandler } = require('./middleware')
const mongoose = require("mongoose")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routes)

mongoose.connect("mongodb://localhost:27017/database-name", { useNewUrlParser: true })


app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`))