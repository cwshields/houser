require('dotenv').config()
const massive = require('massive')
const express = require('express')

const app = express()
const { getList, deleteHouse, addHouse } = require('./controller')
const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DATABASE CONNECTED')
})

app.get('/api/house/', getList)
app.post('/api/house/', addHouse)
app.delete('/api/house/:id', deleteHouse)

app.listen(SERVER_PORT, () => console.log(`Running on Port ${SERVER_PORT}`))