const express = require('express');
const app = express();
const port = 3420;
const usersRoutes = require('./routes/usersRoutes');
const costCentersRoutes = require('./routes/costCentersRoutes');
const oneTimeTransactionsRoutes = require('./routes/oneTimeTransactionsRoutes');
const recurringTransactionsRoutes = require('./routes/recurringTransactionsRoutes');

app.use(express.json());
app.use('/users', usersRoutes);
app.use('/cost-centers', costCentersRoutes);
app.use('/one-time-transactions', oneTimeTransactionsRoutes);
app.use('/recurring-transactions', recurringTransactionsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
