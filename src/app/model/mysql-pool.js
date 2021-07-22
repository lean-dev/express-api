const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.SAKILA_HOST,
  port: Number(process.env.SAKILA_PORT),
  database: process.env.SAKILA_DB,
  user: process.env.SAKILA_USERNAME,
  password: process.env.SAKILA_PASSWORD,
});

module.exports = pool.promise();
