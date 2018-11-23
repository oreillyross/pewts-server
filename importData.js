const annahar = require('./sources/annahar')
const naharnet = require('./sources/naharnet')
const dailystar = require('./sources/dailystar')
//TODO Fix NNA sources, they are repeating, the title does not match as unique for some reason in the prisma exists function call
const nna = require('./sources/nna')
const { prisma } = require('./generated/prisma-client')

//TODO Add nna search
//TODO Add Twitter search
//TODO Add Google keyword search
//TODO Add newsapi search

const sources = [annahar, naharnet, dailystar]

sources.map(updateDatabase)

function updateDatabase(source) {
  
    source.then(data => {
    data.map((event, i) => {
                async function go() {
                    const exists = await prisma.$exists.event({title: event.title})
                    if (!exists) {
                      const createdEvent = await prisma.createEvent(
                        { crawlDate: event.crawlDate, 
                          title: event.title, 
                          description: event.description, 
                          eventDate: new Date() ,
                          source: event.source,
                          href: event.href,
                          unread: true
                        })    
                    }
                }
                setTimeout(() => go(), 1000)
            })
  })
}

module.exports = updateDatabase

