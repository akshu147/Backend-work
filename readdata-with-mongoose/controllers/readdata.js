const procollection = require("../model/product");

const readdata = async (req, res) => {
    try {
        const data = req.body
        const allimages = req.files.images.map((value) => value.filename)
        data.images = allimages;
        const thumbnail = req.files.thumbnail[0].filename;
        data.thumbnail = thumbnail;
        const finaldata = new procollection(data)
        const response = await finaldata.save();
        res.send(response)
        console.log(response)


    }
    catch (err) {
        console.log(err)
    }
}
const getdata = async (req, res) => {
    try {
        const response = await procollection.find()
        const filepath = `${req.protocol}://${req.get("host")}/uploads`

        res.status(200).json({message:"Success", status:200, response, filepath})


    }
    catch (err) {
        res.status(200).json({message:"someting went wrong"})
    }
}
module.exports = { readdata, getdata }






