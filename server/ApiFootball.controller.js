var unirest = require('unirest');
var request = require('request');

exports.HomePage = function (req, res) {
  unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues`)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
      res.send(result.body.data.leagues)
    });
};

exports.TopScorers = async (leage) => {
  var option = {
    url: `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/17-18/topscorers`,
    headers: {
      "X-Mashape-Key": "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1",
      "Accept": "application/json"
    }
  }
  var result = await request(option);
  if (result.statusCode == 200) {
    return result.body.data.topscorers
  } else {
    return result.statusCode
  }
}

exports.TopScorers2 = function (league) {
  return new Promise((resolve) => {
    var Url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/17-18/topscorers`;
    unirest.get(Url)
      .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
      .header("Accept", "application/json")
      .end(function (result) {
        resolve(result.body.data.topscorers);
      });
  })
}


exports.HistoryMatch = function (req, res) {
  var league = req.params.league_slug;
  var team = req.params.team_identifier;
  var Url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/18-19/rounds?team_identifier=${team}`;
  unirest.get(Url)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
      res.send(result.body.data.rounds);
    });

}
exports.CheckOverallStatus = function (req, res) {
  var leagueCheck = req.params.league_slug;
  var position = req.params.position;
  var Url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leagueCheck}/seasons/18-19/standings/${position}`
  unirest.get(Url)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
      res.send(result.body.data.standings);
    });

}
exports.CheckTable = function (req, res) {
  var id = req.params.league_slug;
  var Url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${id}/seasons/18-19/standings`
  unirest.get(Url)
    .header("X-Mashape-Key", "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1")
    .header("Accept", "application/json")
    .end(function (result) {
      res.send(result.body.data.standings);
    });
  return Url;
}
