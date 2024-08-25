const express = require("express")
const app = express();
const path = require("path")
const filepath = path.join(__dirname, "public")
const key = "2906";
app.use(express.static(filepath))

const m1 = (req, res, next)=> {
    console.log("middelwere one")
    next();
}
const m2 = (req, res, next)=> {
    console.log("middelwere two")
    next();
}
const m3 = (req, res, next)=> {
    console.log("middelwere theree")
    next();
}
app.get("/about/:key", (req, res)=> {
    if(req.params.key !== key) return res.send("please enter the valid key")
    
   
    res.sendFile(`${__dirname}/public/about.html`)
    
})
app.get("/contact", (req, res)=> {
    res.sendFile(`${__dirname}/public/contact.html`)
})
app.get("/*", (req, res)=> {
    res.sendFile(`${__dirname}/public/404.html`)
})




app.listen(4000, ()=> {
    console.log("server is successfully created")
})

