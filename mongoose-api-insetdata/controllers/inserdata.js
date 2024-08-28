const collection = require("../models/user")

const inserdata = async(req, res)=> {
    try{
        // res.send("i love uouS")
        const data = req.body
        const allimages = req.files.images.map((value)=> value.filename)
        data.images = allimages
        const finaldata = new collection(data)
        const responce = await finaldata.save()
        res.send(responce)


        
    }
    catch(err) {
        console.log(err)
    }
}
module.exports = inserdata