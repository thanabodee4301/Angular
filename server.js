const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app=express();

app.use(express.static(path.join(__dirname,'dist')))
app.use('/api',require('./server/api.js'));

app.use('*',()=>{
 res.sendFile(path.join(__dirname,'index.html'))
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const server =app.listen(4444,()=>{
const port = server.address().port;
console.log("Server is running at localhost:",port);
})