const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const formidable = require("express-formidable");
// const mongoose = require('mongoose');

app.use(formidable());
// mongoose.connect('mongodb://localhost/', {useMongoClient: true});

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname,"index.html"));
});

app.post('/signup',function(req,res){
  console.log(req.fields);
  var user = req.fields;
  

})

app.listen(PORT,function(){
  console.log("Listening on " + PORT)
})


//for DB
//set up a schema
//set up a model
//POST?
//create a new object from the model when we get form data and save into the DB
//might wanna check if that person already exists
//validate whether the form is as you expect
//maybe return an error page and have a success destination
//could include an captcha
