const pool = require('../models/db');

exports.getAllCostCenters = async (req, res) => {
  const result = await pool.query('SELECT * FROM cost_centers');
  res.json(result.rows);
};
exports.createCostCenter = async (req, res) => {
  const { name } = req.body;
  await pool.query('INSERT INTO cost_centers (name) VALUES ($1)', [name]);
  res.sendStatus(201);
};
exports.updateCostCenter = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await pool.query('UPDATE cost_centers SET name = $1 WHERE cost_center_id = $2', [name, id]);
  res.sendStatus(200);
};
exports.deleteCostCenter = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM cost_centers WHERE cost_center_id = $1', [id]);
  res.sendStatus(200);
};

module.exports = { getAllCostCenters: exports.getAllCostCenters, createCostCenter: exports.createCostCenter, updateCostCenter: exports.updateCostCenter, deleteCostCenter: exports.deleteCostCenter };