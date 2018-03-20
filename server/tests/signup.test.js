/* global done, it, describe, beforeEach, require */

const expect = require('chai').expect
const request = require('supertest')
const app = require('./../server')
const { Users, sum } = require('./../models/users')

const usersArr = [{
	name: 'Kary',
	lastname: 'Hernandez',
	email: 'ka@ka.com',
	password: 'password1234'
}, {
	name: 'Carol',
	lastname: 'Hernandez',
	email: 'carol@a.com',
	password: 'password1234'
}]

// run some code before every single test case
beforeEach((done) => {
	// remove all
	Users.remove({}).then(() => {
		// insert usersArr
		return Users.insertMany(usersArr)
	}).then(() =>  done())
})

describe('Test addUser', () => {

	it('Create new user', () => {
		const user = {
			name: 'Nombre',
			lastname: 'Apellido',
			email: 'ka@ka.com',
			password: 'contrasena'
		}

		// request(app).post('/addUser')
		// 	.send(user)
		// 	.expect((res) => {
		// 		console.log(res.body)
		// 		expect(res.body.name).to.equal(user.password)
		// 	})
		// 	.end((err, res) => {
		// 		if (err) {
		// 			return done(err)
		// 		}

		// 		// fetching all users
		// 		Users.find().then((users) => {
		// 			expect(users.length).to.equal(1)
		// 			expect(users[0].name).to.equal(user.name)
		// 			done()
		// 		}).catch((err) => done(err))
		// 	})

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
		expect(sum(1, 2)).to.equal(3)
	})

})

describe('GET /users', () => {
	it('Should get all users', (done) => {
		request(app).get('/users')
			.expect(200)
			.expect((res) => {
				expect(res.body.users.length).to.equal(2)
			})
			.end(done)
	})
})
