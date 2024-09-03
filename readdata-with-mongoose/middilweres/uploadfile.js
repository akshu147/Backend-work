const multer = require("multer")
const storage = multer.diskStorage({
    destination:(req, res, callback)=> {
        callback(null, "uploads")
    },
    filename:(req, file, callback)=> {
        const splitarry = file.originalname.split(".")
        const extention = splitarry[splitarry.length-1]
        callback(null, Date.now()+"."+extention)
    }
   
    
})
const uploadfile = multer({storage:storage}).fields([
    {name:"images", maxCount:5},
    {name:"thumbnail", maxCount:5}
])
module.exports = uploadfile;