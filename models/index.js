'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/..\config\config.json')[env];
var config    = require(__dirname + '/../app/config/config.json')[env];
var db        = {};

// var mysql = require('mysql');

// if(process.env.JAWSDB_URL) {
//   db = mysql.createConnection(process.env.JAWSDB_URL);
// }


if (process.env.JAWSDB_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
      dialect:  'mysql',
      protocol: 'mysql',
      port:     3306,
      host:     "etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      username: "qn2xe61vm49ou8ri",
      password:   "he6ar9pz5qn17hnb",
      database: "f3w8nrjsvolzzta8"
    })
  } else {

    if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}






    // the application is executed on the local machine ... use mysql
    // sequelize = new Sequelize('example-app-db', 'root', null)
  }














console.log("CONFIG stuff ==> " + config.database + " ==> " + config.username + " ==> " + config.password + " ==> " + config);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    console.log("FILE ==> " + file);
    console.log("model ==> " + model);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;