var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('Express RESTful API');
  fs.readFile('./routes/dataSource/data.json', 'utf8', function(err, data) {
    // console.log(data, "data");
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();
  });
});

module.exports = router;
