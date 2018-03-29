/* global module, require */
const mongoose = require('mongoose')
const validator = require('validator') // validator library

// create model
const Users = mongoose.model('User', {
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

const sum = function sum(a, b) {
	return a + b
}
module.exports = {
	Users,
	sum
}