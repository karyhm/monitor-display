const express = require('express')
const login = express.Router()

login.get('/', (req, res) => {
	res.send('Login')
})

login.post('/validate', (req, res) => {
	res.send('success').status(200)
	console.log()
})

module.exports = login