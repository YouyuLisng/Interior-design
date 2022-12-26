const db = require('mongodb');
const url = "mongodb+srv://root:a24751243@cluster.wy18cj2.mongodb.net/?retryWrites=true&w=majority";
const client = new db.MongoClient(url);
client.connect = (async function(err){
    if(err){
        console.log(err);
        return
    }
    console.log('連線成功');
    client.close();
});

const express = require('express');
const app = express();
app.listen(3000, function(){
    console.log('ok')
});