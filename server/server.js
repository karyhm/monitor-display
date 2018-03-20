const express = require('express')
const bodyParser = require('body-parser') // take json and convert it to object attaching it on the req obj
const path = require('path') // clean path

// locals
const { mongoose } = require('./db/mongoose')
const login = require('./login.js')
const signup = require('./signup.js')
const reset = require('./reset.js')

// models 
const {Users} = require('./models/users')

const app = express()
const publicPath = path.join(__dirname, '../public')
// configure things for heroku 
// proces. env port 
const port = process.env.PORT || 8000
app.use(express.static(publicPath))
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.get('/users', (req, res) => {
	Users.find().then((users) => {
		res.send({users})
	}, (e) => {
		res.status(400).send(e)
	})
})

app.use('/login', login)
app.use('/signup', signup)
app.use('/reset', reset)

app.listen(port, () => {
	console.log(`Listen on port ${port}`)
})

module.exports = app
