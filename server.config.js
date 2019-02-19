var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = app => {
    // app.use(express.static(__dirname + '/app'));
    app.use(
        bodyParser.json({
            limit: 100000000
        })
    );
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    app.use(cookieParser());
    app.use(
        session({
            secret: '2dxdfXdflo:ado2Fxd',
            cookie: {
                maxAge: 3600000
            },
            resave: false,
            saveUninitialized: false
        })
    );
    app.use('/api',require('./server/api.js'));
const server =app.listen(8081,()=>{
const port = server.address().port;
console.log("Server is running at localhost:",port);
})
};
