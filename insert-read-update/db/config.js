const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/akshay")
.then(()=> {
    console.log("database successfully connected")
})
.catch((err)=> {
    console.log("Database connection error", err)
})