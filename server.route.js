var login = require('./server/routes/login');
var home  = require('./server/routes/league');
console.log('router is loaded');
module.exports = app => {
    app.use('/', login);
    app.use('/checklogin', login);
    app.use('/home', home);
}