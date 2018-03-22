/* global global, module, process, require */
const mongoose = require('mongoose')

// which promise library we wanna use
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

module.exports = {
	mongoose
}