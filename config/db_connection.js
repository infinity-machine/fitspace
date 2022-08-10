require('dotenv').config();
const { Sequelize } = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', 
    logging: false
  }
);

module.exports = connection;

//------------------------------old above-------------------------------

// const mysql = require('mysql2');
// const is_production = process.env.NODE_ENV === 'production';

// const connection_data = is_production ? {

//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
// } : {

//   host: 'localhost',
//   database: 'fitspace_db',
//   user: 'root',
//   password: '',
// }

// const connection = mysql.createPool(connection_data)

// module.exports = connection;