
var mongo = require('mongodb');
var monk = require('monk');
var dbConfig = require('./config/db').db;

var db = monk(dbConfig.mongodb_dev_connection);
module.exports = db

console.log('Db loaded...');