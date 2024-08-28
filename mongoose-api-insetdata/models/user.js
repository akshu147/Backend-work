const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    name:String,
    price:Number,
    descrption:String,
    images:Object

})
const collection = mongoose.model("pro", userschema)
module.exports = collection;