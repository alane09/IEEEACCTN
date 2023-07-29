const express = require('express');
const accountingRoutes = require('./accountingRoutes');

const app = express();
app.use('/', accountingRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
