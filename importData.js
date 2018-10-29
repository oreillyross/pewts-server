const EventModel = require('./db/models/event')

const db = require('./db/mongodatabase')
const annahar = require('./sources/annahar')
const naharnet = require('./sources/naharnet')
const dailystar = require('./sources/dailystar')
const nna = require('./sources/nna')


//TODO Add nna search
//TODO Add Twitter search
//TODO Add Google keyword search
//TODO Add newsapi search

function updateDatabase() {
  
  console.log('Update Database Just Ran', new Date().toString())
  
    nna.then(data => {
    data.map((event, i) => {
      let dbEvent = new EventModel(event)
      EventModel.find({title: event.title}, (err, doc) => {
        if (err) console.error('Error in nna EventModel find')
        if (!doc.length) {
          dbEvent.save(doc => console.log('nna saved'))
        }
      })
    })
  })
  

  
  naharnet.then(data => {
    data.map(event => {
      let dbEvent = new EventModel(event)
      EventModel.find({title: event.title}, (err, doc) => {
        if (err) console.error('Error in naharnet EventModel find')
        if (!doc.length) {
          dbEvent.save(doc => console.log('naharnet saved'))
        }
      })
    })
  })
  
  annahar.then(data => {
    data.map(event => {
      let dbEvent = new EventModel(event)
      EventModel.find({title: event.title}, (err, doc) => {
        if (err) console.error('Error in annahar EventModel find')
        if (!doc.length) {
          dbEvent.save(doc => console.log('Annahar saved'))
        }
      })
    })
  })
  
  dailystar.then(data => {
    data.map(event => {
      let dbEvent = new EventModel(event)
      EventModel.find({title: event.title}, (err, doc) => {
        if (err) console.error('Error in annahar EventModel find')
        if (!doc.length) {
          dbEvent.save(doc => console.log('Daily Star saved'))
        }
      })
    })
  })
  
}

module.exports = updateDatabase

