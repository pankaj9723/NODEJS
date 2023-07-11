const express = require('express')
const router = express.Router()





// middleware that is specific to this router
router.use((req, res, next) => {
   
    //token authenticate
    // anything
    next()
})
router.get("/",function(req,res){
    res.send("hello pankaj kya kar rahe ho");
})
module.exports =router;