const express = require('express')
const bcrypt = require('bcrypt')
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
		const userObj = {
			name,
			lastname,
			email,
			password
		}

		// store in db
		res.send(userObj)
	}
})

module.exports = signup