'use strict'

const express = require('express')
const currencyRouter = require('./currency')
const zomatoRouter = require('./zomato')
const userRouter = require('./user')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected to Food Recommender App!'
    })
})

// Routing
router.use('/currency', currencyRouter)
router.use('/zomato', zomatoRouter)
router.use('/users', userRouter)

module.exports = router