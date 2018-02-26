const express = require('express')
const path = require('path') // clean path
const publicPath = path.join(__dirname, '../public')

const app = express()
// configure things for heroku 
// proces. env port 
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/login', (req, res) => {
	res.send('Login page')
})

app.get('/reset', (req, res) => {
	res.send('Reset Password')
})

app.get('/request-reset', (req, res) => {
	res.send('Request Reset')
})

app.listen(port, () => {
	console.log(`Listen on port ${port}`)
})
