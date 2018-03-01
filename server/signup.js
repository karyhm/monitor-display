const express = require('express')
const bcrypt = require('bcrypt')

const signup = express.Router()
const saltRounds = 10

signup.get('/', (req, res) => {
	res.send('Signup')
})

signup.post('/addUser', (req, res) => {
	let password = '1234.'
	const salt = bcrypt.genSaltSync(saltRounds)
	password = bcrypt.hashSync(password, salt)

	const userObj = {
		name: 'Karina',
		lastname: 'Montenegro',
		email: 'karii.mont@gmail.com',
		password
	}

	res.send(userObj)
})

module.exports = signup