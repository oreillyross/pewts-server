const mongoose = require('mongoose')


 let eventSchema = new mongoose.Schema({
      title: String,
      description: String,
      source: String,
      href: String,
      crawlDate: {
       type: Date,
       default: Date.now(),
       
      },
      unread: Boolean,
      tags: [{
        title: String   
      }]
});

module.exports = mongoose.model('events', eventSchema);

