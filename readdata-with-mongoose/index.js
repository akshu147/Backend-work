require("./db/config")
require("dotenv").config()
const express = require("express");
const uploadfile = require("./middilweres/uploadfile");
const { readdata, getdata } = require("./controllers/readdata");
const app = express();
app.use("/uploads", express.static("uploads"))

app.post("/", uploadfile, readdata)
app.post("/data", getdata)
app.listen(process.env.port, "127.0.0.1", ()=> {
    console.log("server is successfully created")
})

