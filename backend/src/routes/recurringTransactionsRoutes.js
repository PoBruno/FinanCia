const express = require('express');
const router = express.Router();
const RecurringTransactionController = require('../controllers/recurringTransactionsController');

router.get('/', RecurringTransactionController.getAllRecurringTransactions);
router.post('/', RecurringTransactionController.createRecurringTransaction);
router.put('/:id', RecurringTransactionController.updateRecurringTransaction);
router.delete('/:id', RecurringTransactionController.deleteRecurringTransaction);

module.exports = router;
