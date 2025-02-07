const pool = require('../models/db');

exports.getAllRecurringTransactions = async (req, res) => {
  const result = await pool.query('SELECT * FROM recurring_transactions');
  res.json(result.rows);
};
exports.createRecurringTransaction = async (req, res) => {
  const { user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended } = req.body;
  await pool.query(
    'INSERT INTO recurring_transactions (user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended]
  );
  res.sendStatus(201);
};
exports.updateRecurringTransaction = async (req, res) => {
  const { id } = req.params;
  const { user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended } = req.body;
  await pool.query(
    'UPDATE recurring_transactions SET user_id = $1, category_id = $2, cost_center_id = $3, description = $4, amount = $5, start_date = $6, installments = $7, is_open_ended = $8 WHERE recurring_id = $9',
    [user_id, category_id, cost_center_id, description, amount, start_date, installments, is_open_ended, id]
  );
  res.sendStatus(200);
};
exports.deleteRecurringTransaction = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM recurring_transactions WHERE recurring_id = $1', [id]);
  res.sendStatus(200);
};

module.exports = { getAllRecurringTransactions: exports.getAllRecurringTransactions, createRecurringTransaction: exports.createRecurringTransaction, updateRecurringTransaction: exports.updateRecurringTransaction, deleteRecurringTransaction: exports.deleteRecurringTransaction };
