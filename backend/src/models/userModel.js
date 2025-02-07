const pool = require('./db');

const UserModel = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
  },
  create: async (name, email) => {
    const res = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return res.rows[0];
  },
  update: async (id, name, email) => {
    const res = await pool.query('UPDATE users SET name = $1, email = $2 WHERE user_id = $3 RETURNING *', [name, email, id]);
    return res.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
  },
};

module.exports = UserModel;