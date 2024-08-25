const express = require("express")
const mongodb = require("mongodb")
const url = "mongodb://localhost:27017";
const database = "akshay";
const client = new mongodb.MongoClient(url)
const connections = async()=> {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(database);
    return db;
}


const app = express();
