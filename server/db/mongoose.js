const mongoose = require('mongoose')

// which promise library we wanna use
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/monitor-data')

module.exports = {
	mongoose
}