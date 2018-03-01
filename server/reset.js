const express = require('express')
const reset = express.Router()

reset.get('/', (req, res) => {
	res.send('Reset Password')
})

reset.post('/sendMail', (req, res) => {
	// validate mail. sendmail with token
})

reset.get('/validate', (req, res) => {
	// validate token and username
})

reset.post('/reset', (req, res) => {
	// validate password,
	// store password and changetoken
	// reedirect to index
})

module.exports = reset
