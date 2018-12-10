const { prisma } = require('./generated/prisma-client')
const nna = require('./sources/nna')


function updateDatabase() {

    console.info('Update Database Just Ran', new Date().toString())

    nna.then(data => {
            data.map((event, i) => {
                async function go() {
                    const exists = await prisma.$exists.event({title: event.title})
                    if (!exists) {
                      const createdEvent = await prisma.createEvent(
                        { crawlDate: event.crawlDate, 
                          title: event.title, 
                          description: event.description, 
                          eventDate: new Date() 
                            
                        })    
                    }
                    
                }
                go()
            })
        }

    )
}

updateDatabase()



// async function go () {
// const myEvent = await prisma.createEvent({
//     crawlDate: new Date(),
//     description: 'A description of what happened',
//     eventDate: new Date(),
//     title: 'a cool title',

// })

// console.log(myEvent)    
// }

// go()
