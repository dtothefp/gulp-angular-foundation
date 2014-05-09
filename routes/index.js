var http = require('http');
var fs   = require('fs');
var _    = require('lodash');

var options = {
  host: 'h8375c89e9e253c50b954d25f6b11587a.cdn.hpcloudsvc.com',
  path: '/largery.json?a=' + Math.random().toString(36).substr(2, 9)
};

exports.json = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.airportList = function(req, res) {
  fs.readFile('./airports.json', function (err, data) {
    if (err) {
        throw err;
    }
    var parsed = JSON.parse(data.toString());
    var filtered = _.filter(parsed, {"iso":"US"});
    res.json(filtered);
  });
};
