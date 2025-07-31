const mongoose=require('mongoose')

const Employeeschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Employeemodel=mongoose.model("employees",Employeeschema);
module.exports = Employeemodel;