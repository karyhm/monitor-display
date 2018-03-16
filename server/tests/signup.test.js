/* global done, it, describe, beforeEach, require */

const supertest = require('supertest')
const expect = require('chai').expect
const { signup } = require('./../signup')
const { Users } = require('./../models/users')

// run some code before every single test case
beforeEach((done) => {
	// remove all
	// return Users.remove({}).then(() => done()).catch((err) => {
	// 	console.log(err)
	// 	done()
	// })
	done()
})

describe('Test addUser', () => {

	it('Create new user', () => {
		const user = {
			name: 'Nombre',
			lastname: 'Apellido',
			email: 'ka@ka.com',
			password: 'contrasena'
		}

		// return signup.post('/addUser')
		// 	.send(user)
		// 	.expect(200)
		// 	.expect((res) => {
		// 		expect(res.body.user).toBe(user)
		// 	})
		// 	.end((err, res) => {
		// 		if (err) {
		// 			return done(err)
		// 		}

		// 		Users.find().then((users) => {
		// 			expect(users.length).toBe(1)
		// 			expect(users[0].user).toBe(user)
		// 			done()
		// 		}).catch((e) => done(e))
		// 	})
	})

	// it('Should not create user with invalid body data', () => {
	// 	const user = {}

	// 	app.post('/addUser')
	// 		.send(user)
	// 		.expect(200)
	// 		.expect((res) => {
	// 			expect(res.body.user).toBe(user)
	// 		})
	// 		.end((err, res) => {
	// 			if (err) {
	// 				return done(err)
	// 			}

	// 			Users.find().then((users) => {
	// 				expect(users.length).toBe(1)
	// 				expect(users[0].user).toBe(user)
	// 				done()
	// 			}).catch((e) => done(e))
	// 		})
	// })

	it('Sum two numbers', () => {
		expect(sum(1, 2)).toBe(3)
	})

})

function sum(a,b){
	return a+b
}