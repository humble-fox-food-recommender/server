'use strict'

const mongoose = require('mongoose')
const { hashPassword } = require('../helpers/bcryptjs')
const Schema = mongoose.Schema

let userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  }
})

userSchema.pre('save', function (next) {
  this.password = hashPassword(this.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User