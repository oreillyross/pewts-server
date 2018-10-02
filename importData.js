const db = require('./mongodatabase')
const mongoose = require('mongoose')




module.exports = function importData(sources) {


  db.once('open', function callback() {

    // Create event schema
    let eventSchema = mongoose.Schema({
      datetime: Date,
      title: String,
      description: String,
      source: String,
      hyperlink: String
    });

    let Event = mongoose.model('event', eventSchema);

    sources.map((source) => {
      let event = new Event({
        datetime: source.datetime,
        title: source.title,
        description: source.descr,
        source: source.newsdesk,
        hyperlink: source.href,
      })
      
      Event.findOne({title: source.title}, (err, doc) => {
        if (!err && doc) {
          
        } else {
          Event.create(event, (error) => {
           if (error) console.error(error)
          })
        }

      })
       
      
      
    })

  });
}
