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
const app = express()
const port = 8001

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
