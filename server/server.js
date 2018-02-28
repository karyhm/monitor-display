const express = require('express')
const path = require('path') // clean path

const login = require('./login.js')
const signup = require('./signup.js')
const reset = require('./reset.js')

const app = express()
const publicPath = path.join(__dirname, '../public')
// configure things for heroku 
// proces. env port 
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.use('/login', login)
app.use('/signup', signup)
app.use('/reset', reset)

app.listen(port, () => {
	console.log(`Listen on port ${port}`)
})
