const mongoose = require("mongoose")
const productscheema = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    stock:Number,
    discount:Number,
    images:Object,
    thumbnail:String
})

const procollection = mongoose.model("akshus", productscheema)
module.exports = procollection
