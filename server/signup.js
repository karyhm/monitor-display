const express = require('express')
const bcrypt = require('bcrypt')

const { User } = require('./models/users')
const {validatePassword, validateEmail} = require('../validate/validate.js')

const signup = express.Router()
const saltRounds = 10

signup.get('/', (req, res) => {
	res.send('Signup')
})

signup.post('/addUser', (req, res) => {
	let password = 'KarinaMont4'
	const name = 'Karina'
	const lastname = 'Montenegro'
	const email = 'karii.mont@gmail.com'

	if (!validatePassword(password)) {
		res.send(password)

	}	else if (!validateEmail(email)) {
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
			res.send('Error').status(404)
		})

	}
})

module.exports = signup