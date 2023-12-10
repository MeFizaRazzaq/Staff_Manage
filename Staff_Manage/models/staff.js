var mongoose = require("mongoose");

var staffSchema = mongoose.Schema({
    firstName:String,
    LastName:String,
    email:String,
    phone:String,
    Gender:String,
    Salary:Number,
});

const staff= mongoose.model("Staff-Data",staffSchema);
module.exports= staff;