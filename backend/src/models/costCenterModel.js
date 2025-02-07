// src/models/costCenterModel.js
const CostCenterModel = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM cost_centers');
    return res.rows;
  },
  create: async (name) => {
    const res = await pool.query('INSERT INTO cost_centers (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
  },
  update: async (id, name) => {
    const res = await pool.query('UPDATE cost_centers SET name = $1 WHERE cost_center_id = $2 RETURNING *', [name, id]);
    return res.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM cost_centers WHERE cost_center_id = $1', [id]);
  },
};

module.exports = CostCenterModel;