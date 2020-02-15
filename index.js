'use strict'

const mongoose = require('mongoose');
const api = require('./lib/api')
const body = require('body-parser')
const co = require('co')
const express = require('express')
const next = require('next')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const MONGO_URL = 'mongodb://admin:admin123@ds219459.mlab.com:19459/dbpakyo'
const PORT = 3000

co(function * () {
  yield app.prepare()

  console.log(`Connecting to ${MONGO_URL}`)
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = yield mongoose.connection;

  const server = express()

  server.use(body.json())
  server.use(cors())
  server.use((req, res, next) => {
    req.db = db
    next()
  })
  server.use('/api', api(db))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT)
  console.log(`Listening on ${PORT}`)
}).catch(error => console.error(error.stack))
