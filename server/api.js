const express = require('express');
const router =express.Router();
var unirest= require('unirest');



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
console.log(req.params);
console.log(id);
     unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${id}/seasons/17-18`)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
        res.send(result.body.data.standings);
    });
    
});
module.exports = router;