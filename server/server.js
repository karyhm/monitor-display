/* global require */
const express = require('express')
const bodyParser = require('body-parser') // take json and convert it to object attaching it on the req obj
const path = require('path') // clean path
const bcrypt = require('bcrypt')

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

app.get('/user/:id', (req, res) => {
	const id = req.params.id

	Users.findById(id).then((user) => {
		if (!user) {
			res.status(404).send('User Not found')
			return 
		}
		res.send({user})
	}).catch((e) => {
		res.status(400).send(e)
	})

})

app.post('/addUser', (req, res) => {
	let password = req.body.password
	const name = req.body.name
	const lastname = req.body.lastname
	const email = req.body.email

	const salt = bcrypt.genSaltSync(10)
	password = bcrypt.hashSync(password, salt)

	// create new instance of model
	const User = new Users({
		name,
		lastname,
		email,
		password
	})

	// store in db
	User.save().then((doc) => {
		res.send(doc).status(200)
	}, (e) => {
		res.send(e).status(404)
	})
})

app.use('/login', login)
app.use('/signup', signup)
app.use('/reset', reset)

app.listen(port, () => {
	console.log(`Listen on port ${port}`)
})

module.exports = app
