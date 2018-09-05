var mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect('mongodb://localhost:2277/test');
    return db;
};