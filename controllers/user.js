'use strict'

const { OAuth2Client } = require('google-auth-library');
const { generateToken } = require('../helpers/jwt')
const { hashPassword } = require('../helpers/bcryptjs')
const User = require('../models/user')

class UserController {
  static signInGoogle(req, res, next) {
    let payload = null
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    client.verifyIdToken({
      idToken: req.body.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then((ticket) => {
        payload = ticket.getPayload()
        return User.findOne({ email: payload.email })
      }).then((user) => {
        if (user) {
          console.log('User is already registered in the server')
          return user
        } else {
          console.log('Create new user!')
          return User.create({
            email: payload.email,
            password: "default"
          })
        }
      })
      .then(user => {
        const appToken = generateToken({ _id: user.id, email: user.email })
        res.status(201).json(appToken)
      })
      .catch((err) => {
        console.log(err)
        next
      })
  }
}

module.exports = UserController