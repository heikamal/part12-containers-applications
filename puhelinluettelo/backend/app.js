const express = require('express')
const app = express()
const Person = require('./models/person')
const mongoose = require('mongoose')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const personsRouter = require('./controllers/persons')
const cors = require('cors')

//app.use(cors())

mongoose.set('strictQuery', false)

const url = config.MONGODB_URI

logger.info('connecting to', url)
mongoose.connect(url)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/persons', personsRouter)
if(process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

// info-ruudun esittäminen
app.get('/info', (req, res) => {
  const date = new Date()
  Person.count({}).then(count => {
    res.send(`Phonebook has info for ${count} people <br> ${date}`)
  })
})

app.get('/version', (req, res) => {
  res.send('version 6')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(middleware.unknownEndpoint)

app.use(middleware.errorHandler)

module.exports = app