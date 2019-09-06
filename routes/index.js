'use strict'

const express = require('express')
const currencyRouter = require('./currency')
const zomatoRouter = require('./zomato')
const userRouter = require('./user')
const { authentication } = require('../middleware/authentication')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected to Food Recommender App!'
    })
})

// Routing
router.use('/users', userRouter)

router.use(authentication)
router.use('/currency', currencyRouter)
router.use('/zomato', zomatoRouter)

module.exports = router