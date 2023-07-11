


const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userModel = require("./model/userSchema");
const userRoute =require("./route/userRoute");
const app = express()
const port = 8001;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/userRoute",userRoute);
// const mongoUrl= 'mongodb://pankajk:manisha123@ac-rxlfufj-shard-00-00.togkdzo.mongodb.net:27017,ac-rxlfufj-shard-00-01.togkdzo.mongodb.net:27017,ac-rxlfufj-shard-00-02.togkdzo.mongodb.net:27017/?ssl=true&replicaSet=atlas-9y85gb-shard-0&authSource=admin&retryWrites=true&w=majority';




// mongoose.connect("mongodb://TechnophileFirdous:Technophile1234@ac-k5g9okb-shard-00-00.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-01.kzuwf7d.mongodb.net:27017,ac-k5g9okb-shard-00-02.kzuwf7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjy27e-shard-0&authSource=admin&retryWrites=true&w=majority"

/* mongoose.connect(mongoUrl,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
}); */

// const userModel = require("./model/userSchema");


/* async-await
promise
callback */

// API TO ADD NEW USER IN MONGODB

/* app.post("/add_user", async (request, response) => {
  let insertData = {"name" : request.body.name,
"age" : request.body.age};
  const user = new userModel(insertData);
  console.log("app hit");
  try {
    await user.save();  //save data inside users table
    response.send(user); // sending user json as response to client
  } catch (error) {
    response.status(500).send(error);
  }
}); */


// API TO GET ALL USER FROM MONGODB

/* app.get("/users", (request, response) => {
  userModel.find({}).then((list)=>{
    response.send(list);
  }).catch((err) =>{
  response.status(500).send(err);
  })
}); */

 



// API TO GET PARTICULAR USER IN MONGODB
/* app.get('/user/:userId',function(req,res){
  userModel.find({"_id":req.params.userId}).then((list)=>{
    res.send(list);
  }).catch((err)=>{
    res.send(err);
  })
}); */


/* API to Update particular user Details in MongoDB */
/* app.put('/updateUser/:id', (req, res) => {
  console.log("Id to update:::::", req.params.id)
  const taskToUpdate = req.body;
  userModel.findOneAndUpdate({"_id":req.params.id},taskToUpdate)
  .then((user)=>{
      res.send("User Updated Successfully");
  }).catch((err)=>{
      res.send(err);
  })
}) */


/* API to Hard delete particular user Details in MongoDB */
/* app.delete('/deleteUser/:userId',function(req,res){
  userModel.deleteOne({"_id":req.params.userId})
 .then((user)=>{
     res.send(user);
 }).catch((err)=>{
     res.send(err);
 })
}) */


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})