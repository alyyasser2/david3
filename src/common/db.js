// src/common/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // Your MySQL username
  password: '',       // Your MySQL password
  database: 'shop_db', // Use the 'shop_db' for both functionalities
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
