const express = require("express")
const readfile = require("./controller/readdata")
const uploadfile = require("./middilwere/uploadfile")
const app = express()
app.post("/", uploadfile, readfile)
app.listen(5000, ()=> {
    console.log("server is running ")
})