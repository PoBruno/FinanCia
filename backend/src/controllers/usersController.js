const pool = require('../models/db');
exports.getAllUsers = async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
};
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.sendStatus(201);
};
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.sendStatus(200);
};
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.sendStatus(200);
};