var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Hello from routes");
  res.render('index', { title: 'Express' });
});

/* GET add page. */
router.get('/add', function(req, res, next) {
  //res.send("Hello from routes");
  res.render('create', { title: 'Express' });
});

/* GET show page. */
router.get('/show', function(req, res, next) {
  //res.send("Hello from routes");
  res.render('show', { title: 'Express' });
});

module.exports = router;
