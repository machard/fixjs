var fs = require('fs');

var data;

exports.setData = function(version) {
  data = fs.readFileSync(__dirname + '/../resources/FIX42.xml');
};

exports.getData = function() {
  return data;
};
