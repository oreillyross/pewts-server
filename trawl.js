const { prisma } = require('./generated/prisma-client')
const naharnet = require('./sources/naharnet')


function updateDatabase(source) {

    console.info('Update Database Just Ran', new Date().toString())

    source.then(data => {
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

updateDatabase(naharnet)



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
