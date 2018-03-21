/* global it, describe, beforeEach, require */

const expect = require('chai').expect
const request = require('supertest')
const {ObjectID} =  require('mongodb')

const app = require('./../server')
const { Users, sum } = require('./../models/users')

const usersArr = [{
	_id: new ObjectID(),
	name: 'Kary',
	lastname: 'Hernandez',
	email: 'ka@ka.com',
	password: 'password1234'
}, {
	_id: new ObjectID(),
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

// describe('Test addUser', () => {

// 	it('POST /users', (done) => {

		// request(app).post('/users')
		// 	.send(usersArr)
		// 	.expect((res) => {
		// 		console.log(res.body)
		// 		expect(res.body.user).to.equal(usersArr)
		// 	})
		// 	.end((err, res) => {
		// 		if (err) {
		// 			return done(err)
		// 		}

		// 		// fetching all users
		// 		Users.find().then((users) => {
		// 			// expect(users.length).to.equal(1)
		// 			expect(users[0].name).to.equal(usersArr[0].name)
		// 			done()
		// 		}).catch((err) => done(err))
		// 	})
	// })

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

// })

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

describe('GET /users/:id', () => {
	it('Should get single user', (done) => {
		request(app).get(`/users/${usersArr[0]._id.toHexString()}`) // convert obj to string with toHexString
			.expect(200)
			.expect((res) => {
				expect(res.body.user.name).to.equal(usersArr[0].name)
			})
			.end(done)
	})

	it('Should return 404 if Id not found', (done) => {
		const id = new ObjectID().toHexString()
		request(app).get(`/users/${id}`) // convert obj to string with toHexString
			.expect(404)
			.end(done)
	})

	it('Return 404 for non-objects ids', (done) => {
		request(app).get('/users/123') // convert obj to string with toHexString
			.expect(404)
			.end(done)
	})

})

describe('DELETE /users/:id', () => {
	it('Should remove a user', (done) => {
		const hexId = usersArr[1]._id.toHexString()
		request(app).delete(`/users/${hexId}`)
			.expect(200)
			.expect(res => {
				expect(res.body.user._id).to.equal(hexId)
			})
			.end((err, res) => {
				if (err) {
					return done(err)
				}

				Users.findById(hexId).then((user) => {
					expect(user).to.be.a('null')
					done()
				}).catch((e) => done(e))
			})
	})

	it('Should return 404 if user not found', (done) => {
		const id = new ObjectID().toHexString()
		request(app).delete(`/users/${id}`)
			.expect(404)
			.end(done)
	})

	it('Should return 404 if id is invalid', (done) => {
		request(app).delete('/users/1234')
			.expect(404)
			.end(done)
	})
})