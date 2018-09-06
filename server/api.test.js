const test = require('./api.js')
const fs = require('fs');
jest.mock('fs');


const leauge = 'bundesliga';
const position = '1';
const team ='ypq0zer1yk8cjympbswu4qapxrjeqjfw';

var Table=`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leauge}/seasons/18-19/standings`
var Overall = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leauge}/seasons/18-19/standings/${position}`
var TopScorer = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leauge}/seasons/17-18/topscorers`;
var HistoryMatch =`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leauge}/seasons/18-19/rounds?team_identifier=${team}`
var ShowAllLeague =`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues`;
describe('check endpoint',()=>{
    it('if choose table  ',()=>{
        var result = test.Checktable(leauge);        
        expect(result).toContain(Table);
    });
    it('if choose table not should be overall ',()=>{
        var result = test.Checktable(leauge);
        expect(result).not.toContain(Overall);
    
    });
    it('if choose Overall ',()=>{
        
        var result = test.CheckOverallStatus(leauge,position);
        expect(result).toEqual(Overall);
    });
    it('if choose Overall not should be history ',()=>{
        var result = test.CheckOverallStatus(leauge,position);
        expect(result).not.toContain(TopScorer);
    });
    it('if choose history should be ',()=>{
        var result =test.CheckHistory(leauge,team);
        expect(result).toContain(HistoryMatch);
    });
    it('if choose history not should be topscorers ',()=>{
        var result = test.CheckHistory(leauge,team);
        expect(result).not.toContain(TopScorer);
    });
    it('if choose topscorer should be',()=>{
       
        var result = test.Checktopscorer(leauge);
        expect(result).toEqual(TopScorer);
    });
    it('if choose topscorer not should be HistoryMatch ',()=>{
        var result = test.Checktopscorer(leauge);
        expect(result).not.toContain(HistoryMatch)
    })
    it('if choose home page should be ',()=>{
        
        var result = test.showall();
        expect(result).toEqual(ShowAllLeague);
    });
    it('if choose home page not should be HistoryMatch',()=>{
        var result =test.showall();
        expect(result).not.toContain(HistoryMatch)
    })
});

/////////// 
