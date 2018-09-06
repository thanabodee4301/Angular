const express = require('express');
const router =express.Router();
var unirest= require('unirest'); 
/////////////////////////////////////// SoccerAPI/////////////////////////////////////////////////////////////
router.get('/show',(req,res)=>{
     unirest.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues")
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
        res.send(result.body.data.leagues);
    });
});

router.get('/show/:league_slug',(req,res)=>{
var id =req.params.league_slug;
console.log(id);
     unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${id}/seasons/17-18/standings`)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
        res.send(result.body.data.standings);
    });
    
router.get('/show/:league_slug/scorer',(req,res) => {
var x = req.params.league_slug;
console.log(x);
    unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${x}/seasons/17-18/topscorers`)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function(result){
        res.send(result.body.data.topscorers);
    });
    });
});

router.get('/show/:league_slug/:team_identifier')
var league = req.params.league_slug;
var team   = req.params.league_sulg;
unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/17-18/rounds?team_identifier=${team}`)
.header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
.header("Accept", "application/json")
.end(function(result){
    res.send(result.body.data.rounds);
});

//////////////////////////////////////////   SQL  /////////////////////////////////////////////
router.post('sql',(req,res)=>{
var sql = "select * from yourtext"
con.query(sql,function(err,result,fields){
   res.send(result)
});
})


module.exports = router;