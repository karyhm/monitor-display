/* global process */
const env = process.env.NODE_ENV || 'development'
process.env.PORT = 8000
console.log('env ******', env)

if (env === 'development') {
	process.env.MONGODB_URI = 'mongodb://Kary:1234.@ds155268.mlab.com:55268/monitor-data'
} else if (env === 'test') {
	process.env.MONGODB_URI = 'mongodb://Kary:1234.@ds011810.mlab.com:11810/monitor-data-test'
}