const express = require('express')

const { Users } = require('./models/users')
const { validatePassword, validateEmail } = require('../validate/validate.js')

const signup = express.Router()

signup.get('/', (req, res) => {
	res.send('Signup')
})

signup.post('/adduser', (req, res) => {
})

module.exports = signup