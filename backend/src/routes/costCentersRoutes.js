const express = require('express');
const router = express.Router();
const CostCenterController = require('../controllers/costCentersController');

// Fix each method call to match exported function names
router.get('/', CostCenterController.getAllCostCenters);
router.post('/', CostCenterController.createCostCenter);
router.put('/:id', CostCenterController.updateCostCenter);
router.delete('/:id', CostCenterController.deleteCostCenter);

module.exports = router;