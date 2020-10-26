const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('homepage/index');
});
module.exports = router;
