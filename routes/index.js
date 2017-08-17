var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', function(req, res){
  var headers =  req.headers;
  var language = headers['accept-language'];
  var software = headers['user-agent'];
  var ip = headers['x-forwarded-for'];
  var data = {
    ipaddress: ip,
    language: language,
    software: software 
  };
  res.json(data);
});

module.exports = router;
