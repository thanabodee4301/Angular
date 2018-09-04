const express = require('express');
const router =express.Router();
const mongoClient = require('mongodb').MongoClient
const mongo_string = 'mongodb//localhost:27017/mongo'

router.get('/show',(req,res)=>{
    res.end("Hi Bank testing");
});

router.post('/add',(req,res)=>{
    res.end('Hi test Add data '+req.name)
    mongoClient.connect(mongo_string,(err,db)=>{
        
    })
});

router.delete('/delete/:name',(req,res)=>{
    res.end('Delete Name'+req.params.name);
});

module.exports = router;