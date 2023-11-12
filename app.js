const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

const {connect} = require('./db/connect')

const indexRouter = require('./routers/index')
const apiRouter = require('./routers/api')

app.use('/index', indexRouter)
app.use('/v1', apiRouter)

connect()

module.exports = app