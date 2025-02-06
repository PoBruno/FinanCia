const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'FinanCia',
  password: 'postgres',
  port: 5432,
});
module.exports = pool;