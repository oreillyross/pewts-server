const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs');

let sources = [];
let href = []
let descr = []
let datetime = []
let newsdesk = []

const $ = cheerio.load(fs.readFileSync('results.html'))

$('.latest-story a.title').each(function(i,elem) {
    sources[i] = {'title':($(this).text())}
})

$('.latest-story').each(function(i,elem) {
  descr[i] = {'descr': $(this).children('p').eq(1).text()}  
})

$('.latest-story a.title').each(function(i, elem) {
     href[i] = ({'href':`http:\\naharnet.com` + $(this).attr('href')})
 })
 
$('.latest-story abbr').each(function(i, elem) {
  datetime[i] = {'datetime': $(this).attr('title') }  
})

$('.latest-story .group').each(function(i, elem) {
  newsdesk[i] = {'newsdesk': /^([\w\-]+)/.exec($(this).text())[0] }  
})

sources.forEach((elem, i) => {
    Object.assign(elem, href[i], descr[i], datetime[i], newsdesk[i])
})

module.exports = sources







