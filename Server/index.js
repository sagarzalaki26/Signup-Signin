const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Employeemodel = require('./models/employee');

mongoose.connect("mongodb://127.0.0.1:27017/employee")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error", err));

  app.post('/login', (req, res)=>{
  const {email,password}=req.body;
  Employeemodel.findOne({email:email})
    .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }
      else{
        res.json("Invalid password")
      }
    }
    else{
      res.json("Email not registered");
    }
  })
   .catch(err => {
      console.error("Login error:", err);
      res.status(500).json("Internal server error");
    });
 }) ;

app.post('/register', (req, res) => {
  const {email}=req.body;
  Employeemodel.findOne({email:email})
  .then(user=>{
    if(user){
        return res.json("Alredy risistered");
        
    }
    else{
     Employeemodel.create(req.body)
  
    .then(employee => res.json(employee))
    .catch(err => res.json(err));
    }
  }
  )

});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
