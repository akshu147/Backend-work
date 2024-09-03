const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/akshay")
.then(()=> {
    console.log("successfullly database connected")
})
.catch((err)=> {
    return err
})
