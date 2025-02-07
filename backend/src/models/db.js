// src/models/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'FinanCia',
  password: 'postgres',
  port: 5432,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Error connecting to the Database:', err.message);
    return;
  }
  release();
  console.log('✅ Successfully connected to Database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err.message);
});

module.exports = pool;
