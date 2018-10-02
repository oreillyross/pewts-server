'use strict'

const sources = require('./scraper')
const json = require('koa-json')
const cors = require('@koa/cors');
const importData = require('./importData')
const db = require('./mongodatabase')
const mongoose = require('mongoose')


//TODO this is where you will pull this out and add a setInterval every hour
importData(sources)

const koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-body');

const app = new koa()

app.use(cors({origin: '*', credentials: false }))

const router = new Router()

router.get('/roo', (ctx, next) => {
  ctx.body = sources    
})

app.use(router.routes())

app.use(async (ctx) => {
    console.log('setting body')
    ctx.body = 'Cmon'
})



app.listen(8080)