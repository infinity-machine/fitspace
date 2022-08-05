require('dotenv').config();
const { Sequelize } = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, 
  {
    host: 'localhost',
    dialect: 'mysql', 
    logging: false,
  }
);

module.exports = connection;