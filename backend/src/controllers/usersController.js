const pool = require('../models/db');

// Remove the next two lines
// const express = require('express');
// const router = express.Router();
// const usersController = require('../controllers/usersController');

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
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE user_id = $3', [name, email, id]);
    res.sendStatus(200);
};
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
    res.sendStatus(200);
};

// Export only the controller functions
module.exports = {
  getAllUsers: exports.getAllUsers,
  createUser: exports.createUser,
  updateUser: exports.updateUser,
  deleteUser: exports.deleteUser
};