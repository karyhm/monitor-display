const express = require('express')
const bcrypt = require('bcrypt')

const { Users } = require('./models/users')
const { validatePassword, validateEmail } = require('../validate/validate.js')

const signup = express.Router()
const saltRounds = 10

signup.get('/', (req, res) => {
	res.send('Signup')
})

signup.post('/adduser', (req, res) => {
	let password = req.body.password
	const name = req.body.name
	const lastname = req.body.lastname
	const email = req.body.email

	const salt = bcrypt.genSaltSync(saltRounds)
	password = bcrypt.hashSync(password, salt)

	// create new instance of model
	const User = new Users({
		name,
		lastname,
		email,
		password
	})

	// store in db
	User.save().then((doc) => {
		res.send(doc).status(200)
	}, (e) => {
		res.send(e).status(404)
	})

})

module.exports = signup