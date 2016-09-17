var Sequelize = require('sequelize');

if (process.env.NODE_ENV !== 'production') {

  // config.js is ignored by Git
  var config = require('../../config.js');
}

var connection = process.env.DATABASE_URL || config.connection;

var sequelize = new Sequelize(connection,
  {
    dialectOptions: {
      ssl: true
    }
  }
);

module.exports = sequelize;