const { collection } = require("../models/productmodel");

const inserdata = async(req, res)=> {
    try{
        const data = req.body
        const fiels = req.files
        // insert data into your database here
        const allimaegs = fiels.images.map((value)=> value.filename)
        data.images = allimaegs;
        const thumbnail = fiels.thumbnail[0].filename
        if(thumbnail) data.thumbnail = thumbnail
        const finaldata = new collection(data)
        const response = await finaldata.save()
        res.status(200).json({message:"Success", data, response})

        
        
    }
    catch(err) {
        res.status(500).json({message:"Failed"})
    }
}
module.exports = {inserdata}