const fs = require("fs")
const { collection } = require("../models/productmodel")
const path = require("path")

const deletedata = async (req, res) => {
    try {
        const response = await collection.findOne(req.params)
        if (!response) return res.status(404).json({ message: "data not found" })
        response.images.map((value) => {
        if(  fs.existsSync(path.join("uploads", value))) {
            fs.unlinkSync(path.join("uploads", value))
        }
  
        })


        if(fs.existsSync(path.join("uploads", response.thumbnail))) {
            fs.unlinkSync(path.join("uploads", response.thumbnail))
        }
        const data = await response.deleteOne(req.params)
    






        res.status(200).json({ message: "Success", data:data })

    }
    catch (err) {
        res.status(500).json({ message: "Failed" })
    }
}
module.exports = { deletedata }