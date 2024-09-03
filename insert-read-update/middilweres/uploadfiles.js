const multer = require("multer")
const storage = multer.diskStorage({
    destination:(req, res, callback)=> {
        callback(null, "uploads")
    },
    filename:(req, file, callback)=> {
        const splitary = file.originalname.split(".")
        const extention = splitary[splitary.length-1]

        callback(null, Math.floor(Math.random() * 10000)+"."+extention)
    }
})
const uploadfile = multer({storage:storage}).fields([
    {name:"images", maxCount:10},
    {name:"thumbnail", maxCount:1}
])
module.exports = {uploadfile}