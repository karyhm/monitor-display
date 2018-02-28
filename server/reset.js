const express = require('express')
const reset = express.Router()

reset.get('/', (req, res) => {
	res.send('Reset Password')
})

reset.get('/request', (req, res) => {
	res.send('Request Reset')
})

module.exports = reset
