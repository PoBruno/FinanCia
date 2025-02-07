const express = require('express');
const router = express.Router();
const OneTimeTransactionController = require('../controllers/oneTimeTransactionsController');

router.get('/', OneTimeTransactionController.getAllOneTimeTransactions);
router.post('/', OneTimeTransactionController.createOneTimeTransaction);
router.put('/:id', OneTimeTransactionController.updateOneTimeTransaction);
router.delete('/:id', OneTimeTransactionController.deleteOneTimeTransaction);

module.exports = router;