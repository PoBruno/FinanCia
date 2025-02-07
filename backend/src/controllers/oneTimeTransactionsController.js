const pool = require('../models/db');

exports.getAllOneTimeTransactions = async (req, res) => {
  const result = await pool.query('SELECT * FROM one_time_transactions');
  res.json(result.rows);
};
exports.createOneTimeTransaction = async (req, res) => {
  const { amount, description, cost_center_id, transaction_date, user_id, category_id } = req.body;
  await pool.query(
    'INSERT INTO one_time_transactions (user_id, category_id, cost_center_id, description, amount, transaction_date) VALUES ($1, $2, $3, $4, $5, $6)',
    [user_id, category_id, cost_center_id, description, amount, transaction_date]
  );
  res.sendStatus(201);
};
exports.updateOneTimeTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, description, cost_center_id, transaction_date, user_id, category_id } = req.body;
  await pool.query(
    'UPDATE one_time_transactions SET user_id = $1, category_id = $2, cost_center_id = $3, description = $4, amount = $5, transaction_date = $6 WHERE transaction_id = $7',
    [user_id, category_id, cost_center_id, description, amount, transaction_date, id]
  );
  res.sendStatus(200);
};
exports.deleteOneTimeTransaction = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM one_time_transactions WHERE transaction_id = $1', [id]);
  res.sendStatus(200);
};

module.exports = { getAllOneTimeTransactions: exports.getAllOneTimeTransactions, createOneTimeTransaction: exports.createOneTimeTransaction, updateOneTimeTransaction: exports.updateOneTimeTransaction, deleteOneTimeTransaction: exports.deleteOneTimeTransaction };