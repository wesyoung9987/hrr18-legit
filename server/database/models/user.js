var Sequelize = require('sequelize');
var Promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');
var db = require('../database_config.js');

var User = db.define('User', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  isAdmin: Sequelize.STRING,
  schoolStartDate: {type: Sequelize.DATE, defaultValue: Date.now()},
  schoolEndDate: {type: Sequelize.DATE, defaultValue: Date.now()}
},
{
  instanceMethods: {
    comparePassword: function (attemptedPassword, callback) {
      bcrypt.compare(attemptedPassword, this.password, function (err, isMatch) {
        if (err) { throw err; }
        callback(null, isMatch);
      });
    }
  }
});

User.beforeCreate(function (user) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(user.password, null, null)
    .then(function (hash) {
      user.password = hash;
    });
});

module.exports = User;

// In this file we are comparing the attempted password with the stored hash password.
// It will salt+ hash, and then compare the two.

// Also have a pre save hook to cipher any password