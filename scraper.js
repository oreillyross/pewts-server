const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs');

let sources = [];
let href = []
let descr = []

const $ = cheerio.load(fs.readFileSync('results.html'))

$('.latest-story a.title').each(function(i,elem) {
    sources[i] = {'title':($(this).text())}
})

$('.latest-story p').each(function(i, elem) {
    descr[i] = {'descr': $(this).text()}
})

 $('.latest-story a.title').each(function(i, elem) {
     href[i] = ({'href':$(this).attr('href')})
 })

sources.forEach((elem, i) => {
    Object.assign(elem, href[i], descr[i])
})

console.log(sources)







