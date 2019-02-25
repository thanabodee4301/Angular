// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// var morgan = require('morgan');
// var session = require('express-session');
// var cookieParser = require('cookie-parser');


// const app=express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:true
// }));
// app.use(session({ resave: true ,secret: '123456' , saveUninitialized: true}));
// app.use(morgan('tiny'));
// app.use('/api',require('./server/api.js'));
// app.use(cookieParser());
// module.exports = app;
var express = require('express');

const config = require('./server.config');
const route = require('./server.route');

var app = express();
config(app);
route(app);
module.exports = app;
