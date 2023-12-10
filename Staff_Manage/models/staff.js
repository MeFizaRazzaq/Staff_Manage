var mongoose = require("mongoose");

var staffSchema = mongoose.Schema({
    firstName:String,
    LastName:String,
    email:String,
    phone:String,
    Gender:String,
    Salary:Int16Array,
});