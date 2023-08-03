require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


// mongoose.connect("mongodb://localhost/subscribers", {useNewUrlParser: true, useUnifiedTopology: true})

// mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true, user: process.env.MONGO_USERNAME, pass: process.env.MONGO_PASSWORD})

mongoose.connect(process.env.DATABASE_STRING, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  maxPoolSize: 10,
  authSource: "admin",
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD
})
.then(() => console.log('Connected to DB'))
.catch((e) => console.log(e));


const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connerted'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, ()=> 
  // console.log('Servidor está rodando!')
  console.log('Server running!')
)