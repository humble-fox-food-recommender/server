'use strict'

const express = require('express')
const router = express.Router()
const { CurrencyController } = require('../controllers')

router.get('/', CurrencyController.getCurrency)

module.exports = router