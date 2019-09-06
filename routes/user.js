'use strict'

const express = require('express')
const router = express.Router()
const { UserController } = require('../controllers')

router.post('/login', UserController.signInGoogle)


module.exports = router