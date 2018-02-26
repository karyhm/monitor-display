express = require('express')

const app = express()
 
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

app.listen(3000, () => {
	console.log('Listen in port 3000')
})