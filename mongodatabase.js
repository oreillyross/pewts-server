

const mlab = require('./constants')
const mongoose = require('mongoose')

mongoose.connect(mlab)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db