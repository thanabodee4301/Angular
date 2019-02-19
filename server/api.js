const express = require('express');
const router = express.Router();
var login = require('./routes/login');
var home = require('./routes/league');
router.use('/checklogin', login);
router.use('/show', home);
module.exports = router;