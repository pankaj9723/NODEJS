/* const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */


const express = require("express")
const mongoose = require('mongoose')
const app = express()
const port = 8001

const mongoUrl= 'mongodb://pankaj9723:pankaj9723@ac-rxlfufj-shard-00-00.togkdzo.mongodb.net:27017,ac-rxlfufj-shard-00-01.togkdzo.mongodb.net:27017,ac-rxlfufj-shard-00-02.togkdzo.mongodb.net:27017/?ssl=true&replicaSet=atlas-9y85gb-shard-0&authSource=admin&retryWrites=true&w=majority';

// mongodb connection
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected!'));

app.get('/', (req, res) => {
  // logic
  res.send("Hello World!")
})

app.post('/post', (req, res) => {
  // logic
  res.send("this is our post method")
})

app.delete('/delete', (req, res) => {
  //logic
  res.send("this is delete method")
})


app.put('/put', (req, res) => {
  //logic
  res.send("this is put method")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
