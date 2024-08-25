const express = require("express");
const path = require("path");
const key = "2906";
const filepath = path.join(__dirname, "public");
const app = express();
const router2 = express.Router();
const m1 = (req, res, next) => {
   
  
    if (!req.query.key) return res.send("please enter the key")
    if (req.query.key !== key) return res.send("pleae enter valid key")
        next();

}
const m2 = (req, nex, next)=> {
    console.log("middelwere 2")
    next();
}
app.use(m1)
router2.use(m2)
app.get("/", (req, res) => {
    console.log(req.params.key)
    res.sendFile(`${filepath}/home.html`)
})
app.get("/about", (req, res) => {

    res.sendFile(`${filepath}/about.html`)
})
app.get("/detail", (req, res) => {
    res.sendFile(`${filepath}/detail.html`)
})
router2.get("/contact", (req, res) => {
    res.sendFile(`${filepath}/contact.html`)
})
app.use(router2)
app.get("/*", (req, res) => {
    res.sendFile(`${filepath}/404.html`)
})

app.listen(4000, "127.0.0.1", () => {
    console.log("Server is successfully created")
})
