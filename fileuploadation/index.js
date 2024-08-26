const express = require("express");
const multer = require("multer");
const app = express();
const singelfile = multer({storage:multer.diskStorage({
    destination:(req, res, callback)=> {
        callback(null, "uploads")
    },
    filename:(req, file, callback)=> {
        console.log(file)
        callback(null, "dummy")
    }
})}).single("images", 5)
const multiple = multer({storage:multer.diskStorage({
    destination:(req, res, callback)=> {
        callback(null, "uploads")
    },
    filename:(req, file, callback)=>{
        console.log(file)
        callback(null, Date.now()+file.originalname)
    }
})}).array("images", 5)
const multifield = multer({storage:multer.diskStorage({
    destination:(req, res, callback)=> {
        callback(null, Date.now().file.originalname)
    },
    filename:(req, file, callback)=> {
        callback(null, "halllo")
    }
})}).array([
    {name:"images", maxCount:5},
    {name:"thumbnail", maxCount:5}

])



app.post("/", singelfile,(req, res)=> {
    console.log(req.body)
    res.send("hallo")
})
app.post("/multiple", multiple, (req, res)=> {
    
    console.log(req.body)
    res.send("multiple data")
})
app.post("/mulld", multifield, (req, res)=> {
    res.send("i love you")

})

app.listen(4000, "127.0.0.1", ()=> {
    console.log("server is created")
})