require("dotenv").config()
const mongoose = require("mongoose")
const { ragisteradmin } = require("../controllers/admin/admincontroler")
const url = `mongodb+srv://${process.env._username}:${process.env.userpassword}@akshay.y0o5z.mongodb.net/${process.env.databasename}?retryWrites=true&w=majority&appName=${process.env.appname}`
mongoose.connect(url)
.then(()=> {
    console.log("Databse connected successfully")
    ragisteradmin()
})
.catch((err)=> {
    console.log("database connection failed", err)
})
// console.log(process.env.databasename)
