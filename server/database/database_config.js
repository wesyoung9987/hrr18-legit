var Sequelize = require('sequelize');

if (process.env.NODE_ENV !== 'production') {

  // config.js is ignored by Git
  // just for heroku
  var config = require('../../config.js');

}

var connection = process.env.DATABASE_URL || config.connection;
// var connection = process.env.DATABASE_URL;

var sequelize = new Sequelize(connection,
  {
    dialectOptions: {
      ssl: true
    }
  }
);
//HEROKU_POSTGRESQL_BLACK_URL
module.exports = sequelize;