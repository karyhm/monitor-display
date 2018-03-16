const mongoose = require('mongoose')

// which promise library we wanna use
mongoose.Promise = global.Promise
mongoose.connect('mongodb://Kary:1234.@ds155268.mlab.com:55268/monitor-data')
module.exports = {
	mongoose
}