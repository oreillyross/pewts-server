const updateDatabase = require('./importData')

//TODO export a reference to this so that it can be stopped i.e. clearInterval when server shuts down

updateDatabase()

// const f = () => { updateDatabase() }

// const schedule = setInterval(f, 1000 * 60 * 10)

// setTimeout(() => {
//     clearInterval(schedule)
// }, 10000)