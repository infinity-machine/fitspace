const { Sequelize } = require('sequelize');

const connection = new Sequelize( 'fitspace_user','root', '', 
  {
    host: 'localhost',
    dialect: 'mysql', 
    logging: false
  }
);

module.exports = connection;