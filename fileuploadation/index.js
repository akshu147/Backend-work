const express = require("express");
const multer = require("multer");
const app = express();

 
const multifield = multer({storage:multer.diskStorage({
    destination:(req, res, callback)=> {
        callback(null, "uploads")
    },
    filename:(req, file, callback)=> {
        console.log(file)
        callback(null, Date.now()+file.originalname)
    }
})}).fields([
    {name:"images", maxCount:5},
    {name:"thumbnail", maxCount:1}

])




app.post("/multif", multifield, (req, res)=> {
    res.send("i love you")

})

app.listen(4000, "127.0.0.1", ()=> {
    console.log("server is created")
})