const cheerio = require('cheerio')
const fetch = require('node-fetch')
const moment = require('moment')

const href = 'http://nna-leb.gov.lb/en/news-categories/2/Security'

const getMainSources = async url => {
    let sources = []
    try {
        const response = await fetch(url)
        const html = await response.text()
        let $ = cheerio.load(html)
        $('.bannerfeatured-content a')
            .each(function(i, elem) {
                let href = $(this).attr('href')
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

//getMainSources(href).then(data => console.log(data))

const getArticleData = async article => {

    const response = await fetch(article)
    const html = await response.text()
    let $ = cheerio.load(html)
    const title = $('div ol li:nth-child(3)').text().trim()
    const description = $('.article-content p').text().trim()
    const source = 'National News Agency'
    const crawlDate = new Date()
    const href = article
    return {

        title,
        description,
        source,
        href,
        crawlDate
    }

}

// const article = 'http://nna-leb.gov.lb/en/show-news/95478/Army-martyr-falls-others-seriously-wounded-in-overnight-raid-in-Hermel'
// getArticleData(article).then(data => console.log(data))


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


//  getSources(href).then(data => {
//   console.log(data)
//  })
