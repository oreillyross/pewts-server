const cheerio = require('cheerio')
const fetch = require('node-fetch')
const moment = require('moment')

const href = 'https://en.annahar.com/section/184-lebanon'

const getMainSources = async url => {
  let sources = []
  try {
    const response = await fetch(url)
    const html = await response.text()
    let $ = cheerio.load(html)
    $('.container-half a').each(function(i, elem) {
      let href = `https://en.annahar.com${$(this).attr('href')}`
      sources.push(href)
    })
  }
  catch (err) {
    console.log(err)
  }
  finally {
     return sources
  }
}

const getArticleData = async article => {
  
   try {
    const response = await fetch(article)
    const html = await response.text()
    let $ = cheerio.load(html)
    const text = $('.author_intro div h4').text()
    const description = $('.description').text()
    return {'title': $('h1').text(), 
            'description': description, 
            'source': 'Annahar', 
            'href': article, 
            'crawlDate': new Date()
           }
   } catch (err) {
     console.err(err)
   }
} 


const getSources = url => {
  return getMainSources(url)
    .then(sources => {
      const promises = sources.map(getArticleData)  
      return Promise.all(promises).then(data => {
        return data
      })
    })
}

module.exports = getSources(href)


// const importData = require('../importData')

// getSources(href).then(data => {
//   console.log(data)
// })





