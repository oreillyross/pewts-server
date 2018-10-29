const mongoose = require('mongoose')


 let eventSchema = new mongoose.Schema({
      title: String,
      description: String,
      source: String,
      href: String,
      crawlDate: Date
});

module.exports = mongoose.model('events', eventSchema);

