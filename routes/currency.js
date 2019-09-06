'use strict'

const express = require('express')
const router = express.Router()
const { CurrencyController } = require('../controllers')

router.get('/', CurrencyController.getRate)
router.post('/', CurrencyController.changeRate)

module.exports = router