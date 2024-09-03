const { collection } = require("../models/productmodel")

const updatedata = async(req, res)=> {
    try{
    
     
    

        res.status(200).json({message:"Data updated successfully", data})
    }
    catch(err) {
        if(err == "objectid") return res.status(403).json({message:"please enter a valid key"})
    }
}
module.exports = {updatedata}