exports.getAllRecurringTransactions = async (req, res) => {
    const result = await pool.query('SELECT * FROM recurring_transactions');
    res.json(result.rows);
};
exports.createRecurringTransaction = async (req, res) => {
    const { amount, description, cost_center_id, frequency } = req.body;
    await pool.query('INSERT INTO recurring_transactions (amount, description, cost_center_id, frequency) VALUES ($1, $2, $3, $4)', [amount, description, cost_center_id, frequency]);
    res.sendStatus(201);
};
exports.updateRecurringTransaction = async (req, res) => {
    const { id } = req.params;
    const { amount, description, cost_center_id, frequency } = req.body;
    await pool.query('UPDATE recurring_transactions SET amount = $1, description = $2, cost_center_id = $3, frequency = $4 WHERE id = $5', [amount, description, cost_center_id, frequency, id]);
    res.sendStatus(200);
};
exports.deleteRecurringTransaction = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM recurring_transactions WHERE id = $1', [id]);
    res.sendStatus(200);
};
