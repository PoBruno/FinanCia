// src/models/recurringTransactionModel.js
const RecurringTransactionModel = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM recurring_transactions');
    return res.rows;
  },
  create: async (user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended) => {
    const res = await pool.query(
      'INSERT INTO recurring_transactions (user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended]
    );
    return res.rows[0];
  },
  update: async (id, user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended) => {
    const res = await pool.query(
      'UPDATE recurring_transactions SET user_id = $1, category_id = $2, cost_center_id = $3, description = $4, amount = $5, start_date = $6, installments = $7, is_open_ended = $8 WHERE recurring_id = $9 RETURNING *',
      [user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended, id]
    );
    return res.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM recurring_transactions WHERE recurring_id = $1', [id]);
  },
};

module.exports = RecurringTransactionModel;