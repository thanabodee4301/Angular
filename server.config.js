var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = app => {
    app.use(
        bodyParser.json({
            limit: 100000000
        })
    );
    app.use(
        session({
            secret: '2dxdfXdflo:ado2Fxd',
            cookie: {
                maxAge: 36000000
            },
            resave: false,
            saveUninitialized: false
        })
    );
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
app.use(cookieParser());
app.use('/api',require('./server/api.js'));
const server = app.listen(8081,()=>{
const port = server.address().port;
console.log("Server is running at localhost:",port);
})
};
