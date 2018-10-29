const cheerio = require('cheerio')
const fetch = require('node-fetch')
const chrono = require('chrono-node')
const fs = require('fs')

const href = 'https://www.dailystar.com.lb/News/Lebanon-News.ashx'

const getMainSources = async url => {
    let sources = []
    try {
      const response = await fetch(url)
      const html = await response.text()
      const $ = cheerio.load(html)
      $('.ic_caption a').each(function (i, elem) {
          sources.push(`https://www.dailystar.com.lb${$(this).attr('href')}`)
      })
    } catch (err) {
        console.error('an error in dailystar getmainsources func')
    } finally {
        return sources
    }
    
}

const getArticleData = async url => {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)
    const title = $('#bodyHolder_divTitle').text()
    //TODO find a way to get an article snippet from Daily Star. Maybe use selenium to login then scrape page and log out again
    const description = '' 
    const source = 'Daily Star'
    const href = url
    const crawlDate = new Date()
    return {
        title,
        description,
        source,
        href,
        crawlDate
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



//getSources(href).then(data => console.log(data))