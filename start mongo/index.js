const express = require("express")
const mongodb = require("mongodb")
const url = "mongodb://localhost:27017";
const dbname = "akshay"
const client = new mongodb.MongoClient(url)
const connections = async()=> {
    try {
        await client.connect()
        console.log("Database connected")
        const db = client.db(dbname)
        return db
    }
    catch(err) {
        console.log(err)
    }
    
}
const app = express();
// const insertdata = async()=> {
//     const db = await connections();
//     const mycollections = db.collection("akshu")
//     const responce = await mycollections.insertOne({
//         name:"sunsa",
//         sirname:"jangid",
//         dream:"actor"
//     })
//     console.log(responce)
    

// }
// insertdata()
const readdata = async()=> {
    const db = await connections();
    const collection = db.collection("akshu")
    const reaponce = await collection.find().toArray()
    console.log(reaponce)
    
}
readdata()

app.listen(5000, "127.0.0.1", ()=> {
    console.log("Server is successfully created")
})