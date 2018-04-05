/* global module, require */
const mongoose = require('mongoose')
const validator = require('validator') // validator library
const jwt = require('jsonwebtoken')
const _ = require ('lodash')

// create model. Schema property lets you defined a new schema in order to tack a custom method
const UserSchema = new mongoose.Schema({
	// specify details of each attribute 
	name: {
		type: 'String',
		required: true,
		minlength: 4,
		trim: true
	},
	lastname: {
		type: 'String',
		minlength: 4,
		deafult: null,
		trim: true
	},
	email: {
		type: 'String',
		required: true,
		trim: true,
		minlength: 1,
		unique: true, // only a unique email,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	},
	password: {
		type: 'String',
		required: true,
		minlength: 8,
		trim: true
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
})

// determines what gets sent back
UserSchema.methods.toJSON = function () {
	const user =this
	const userObj = user.toObject() // taking moongoose var and converting to an obj

	return _.pick(userObj, ['_id', 'email']) // return only id and email
}

// on this object we can add any method we like
UserSchema.methods.generateAuthToken = function () {
	const user = this
	const access = 'auth'
	const token = jwt.sign({_id: user._id.toHexString(), access}, 'salty').toString()

	// update tokens array
	user.tokens = user.tokens.concat([{ access, token }])
	return user.save().then(() => {
		return token
	})
}

const Users = mongoose.model('User', UserSchema)

const sum = function sum(a, b) {
	return a + b
}

module.exports = {
	Users,
	sum
}