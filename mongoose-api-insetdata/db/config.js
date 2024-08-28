const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/akshay")
.then(()=> {
    console.log("Connected to database")
})
.catch((err)=> {
    console.log("somethig went wrasdfong")
})