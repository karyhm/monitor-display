const express = require('express')
const bcrypt = require('bcrypt')

const { User } = require('./models/users')
const { validatePassword, validateEmail } = require('../validate/validate.js')

const signup = express.Router()
const saltRounds = 10

signup.get('/', (req, res) => {
	res.send('Signup')
})

signup.post('/adduser', (req, res) => {
	console.log(req.body)
	let password = req.body.password
	const name = req.body.name
	const lastname = req.body.lastname
	const email = req.body.email

	if (!validatePassword(password)) {
		res.send(password)

	} else if (!validateEmail(email)) {
		res.send('Error, email invalido')

	} else {

		const salt = bcrypt.genSaltSync(saltRounds)
		password = bcrypt.hashSync(password, salt)

		// create new instance of model
		const Users = new User({
			name,
			lastname,
			email,
			password
		})

		// store in db
		Users.save().then((doc) => {
			res.send(doc).status(200)
		}, (e) => {
			res.send(e).status(404)
		})

	}
})

module.exports = signup