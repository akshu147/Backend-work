const mongoose = require("mongoose")
const product = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    catogery:String,
    descount:Number,
    images:Object,
    thumbnail:String
})

const collection = mongoose.model("jeans", product)
module.exports = {collection}