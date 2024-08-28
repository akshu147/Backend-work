const readfile = (req, res)=> {
    try{
        res.send("hallr Australia")
        // console.log(req.files)
        console.log(req.body)
        
    }
    catch(err) {
        return err;
    }
}
module.exports = readfile;