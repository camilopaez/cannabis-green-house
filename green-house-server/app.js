const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const InitiateMongoServer = require('./config/db')
const router = require('./components/router')

InitiateMongoServer(config.mongouri)
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

//routes
app.use('/', router)

app.listen(config.port, (req, res) => {
  console.log(`Server Started at PORT ${config.port} in ${config.env} mode`)
})
