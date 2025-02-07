// src/models/oneTimeTransactionModel.js
const OneTimeTransactionModel = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM one_time_transactions');
    return res.rows;
  },
  create: async (user_id, category_id, cost_center_id, description, amount, transaction_date) => {
    const res = await pool.query(
      'INSERT INTO one_time_transactions (user_id, category_id, cost_center_id, description, amount, transaction_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, category_id, cost_center_id, description, amount, transaction_date]
    );
    return res.rows[0];
  },
  update: async (id, user_id, category_id, cost_center_id, description, amount, transaction_date) => {
    const res = await pool.query(
      'UPDATE one_time_transactions SET user_id = $1, category_id = $2, cost_center_id = $3, description = $4, amount = $5, transaction_date = $6 WHERE transaction_id = $7 RETURNING *',
      [user_id, category_id, cost_center_id, description, amount, transaction_date, id]
    );
    return res.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM one_time_transactions WHERE transaction_id = $1', [id]);
  },
};

module.exports = OneTimeTransactionModel;