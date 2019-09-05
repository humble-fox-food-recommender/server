'use strict'

const express = require('express')
const currencyRouter = require('./currency')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected to Food Recommender App!'
    })
})

// Routing
router.use('/currency', currencyRouter)

module.exports = router