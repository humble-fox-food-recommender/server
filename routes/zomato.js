'use strict'

const express = require('express')
const router = express.Router()
const { ZomatoController } = require('../controllers')

router.get('/search/:parameter/:page',ZomatoController.search)
router.get('/:id', ZomatoController.getDetail)

module.exports = router