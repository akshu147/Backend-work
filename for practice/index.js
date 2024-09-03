const express  = require("express")
const mongodb = require("mongodb")
const url = "mongodb://localhost:27017"
const client = new mongodb.MongoClient(url)
const dbname = "akshay";
const connection = async()=> {
    await client.connect()
    console.log("succesfully conntected")
    const db = client.db(dbname)
    return db
}
const app = express();
const insertdata = async()=> {
    const db = await connection()
    const collection = db.collection("akshus")
    const response = await collection.updateOne({name:"hali"}, {$set:{name:"halo"}})
    console.log(response)


}
insertdata()
app.listen(5000, ()=> {
    console.log("server created successfully ")
})
