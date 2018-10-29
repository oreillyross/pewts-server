const mlab = require('../constants')
const mongoose = require('mongoose')
const Event = require('./models/event')

const models = {
    Event
}

mongoose.Promise = global.Promise

const db = mongoose.connect(mlab, { useNewUrlParser: true });

module.exports = {
    models,
    db

}



