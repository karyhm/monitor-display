/* global module, require */
const mongoose = require('mongoose')

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
		trim: true
	},
	password: {
		type: 'String',
		required: true,
		minlength: 8,
		trim: true
	}
})

const sum = function sum(a, b) {
	return a + b
}
module.exports = {
	Users,
	sum
}