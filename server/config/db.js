var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://db:db@ds215380.mlab.com:15380/maendb');
 
module.exports = connection;