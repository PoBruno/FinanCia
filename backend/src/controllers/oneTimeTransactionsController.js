exports.getAllOneTimeTransactions = async (req, res) => {
  const result = await pool.query('SELECT * FROM one_time_transactions');
  res.json(result.rows);
};
exports.createOneTimeTransaction = async (req, res) => {
  const { amount, description, cost_center_id } = req.body;
  await pool.query('INSERT INTO one_time_transactions (amount, description, cost_center_id) VALUES ($1, $2, $3)', [amount, description, cost_center_id]);
  res.sendStatus(201);
};
exports.updateOneTimeTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, description, cost_center_id } = req.body;
  await pool.query('UPDATE one_time_transactions SET amount = $1, description = $2, cost_center_id = $3 WHERE id = $4', [amount, description, cost_center_id, id]);
  res.sendStatus(200);
};
exports.deleteOneTimeTransaction = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM one_time_transactions WHERE id = $1', [id]);
  res.sendStatus(200);
};