const express = require('express')
const signup = express.Router()

signup.get('/', (req, res) => {
	res.send('Signup')
})

signup.post('/signup', (req, res) => {
	const name = 'Karina'
	const lastname = 'Montenegro'
	const email = 'karii.mont@gmail.com'
	
	res.send('Request Reset')
})


module.exports = signup