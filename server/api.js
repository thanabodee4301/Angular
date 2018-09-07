const express = require('express');
const router = express.Router();
var score = require('./routes/score.js');
var table = require('./routes/table.js');
var historymathc = require('./routes/historymatch.js');
var overall =require('./routes/overall.js');
var league = require('./routes/league.js');


router.get('/show', league);
router.get('/show/:league_slug/scorer', score);
router.get('/show/:league_slug', table);
router.get('/round/:league_slug/:team_identifier', historymatch);
router.get('/check/:league_slug/:position', overall);
module.exports = router;