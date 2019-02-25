var express = require('express');
var router = express.Router();
var _ = require('underscore');


router.post('/loginchk', function(req, res) {
    var test = chkLogin(req);
    console.log('sawassdeeee',req.session.UserName);
    res.send(test);
});
router.get('/checkpermission', function(req,res) {
    console.log(req.session.UserName);
    res.send(req.session.userName);
})
function chkLogin(req) {
    var userName = req.body.userName;
    var password = req.body.password;
    var chkLogin = _.where(userPassword(), {
        name: userName,
        pass: password
    });
    if (_.isEmpty(chkLogin)) {
        console.log('Login Fail.');
        return {
            status: 'notsuc'
        };
    } else {
            req.session.UserName = chkLogin[0].name;
            req.session.permission = chkLogin[0].permission;
            return {
                status: 'suc',
                permission: chkLogin[0].permission
            };
    }
}
function userPassword() {
    return [
        {
            name: 'adword',
            pass: 'adword',
            permission: 'ADWORD'
        },
        {
            name: 'web',
            pass: 'web',
            permission: 'WEB'
        },
        {
            name: 'cs',
            pass: 'cs',
            permission: 'CS'
        }
    ];
}
module.exports = router;