const { collection } = require("../models/productmodel")

const readdata = async(req, res)=> {
    try{
        const response = await collection.find()
        console.log(response)
        const filepath = `${req.protocol}://${req.get("host")}/uploads`
      
        res.status(200).json({message:"Success", response, filepath})
    }
    catch(err) {
        res.status(500).json({message:"Failed"})
    }
}
module.exports = {readdata}