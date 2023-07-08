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


// comments starts here

// mongodb connection
/* mongoose.connect(mongoUrl)
  .then(() => console.log('Connected!'))
  .catch((error)=>{
    console.log(error);
  }) */


//  <!-- comment ends here -->

// mongoose.connect("mongodb://TechnophileFirdous:Technophile1234@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(mongoUrl
,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const userModel = require("./model/userSchema");
app.post("/add_user", async (request, response) => {
  let insertData = {"name" : request.body.name,
"age" : request.body.age};
  const user = new userModel(request.body);
  console.log("app hit");
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});







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
