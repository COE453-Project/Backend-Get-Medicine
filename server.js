const express = require('express');
const logResponse = require('./log.js');

const app = express();
const port = 3000;

app.post('/:id', (req, res, next) => {
    const id = req.params.id;

    // TODO Get the medicine with the given ID from the database 
    const response = {
      id: id,
      name: 'Amoxicillin',
      description: 'A penicillin antibiotic that fights bacteria.',
      productionDate: '2020-01-15',
      expiryDate: '2022-01-15',
      expiryStatus: 'Expired',
      storedAtTimestamp: new Date('2020-01-15T10:32:49Z').toISOString(),
      lastUpdatedTimestamp: new Date('2021-05-29T15:48:24Z').toISOString()
    };

    // Send the response
    res.json(response);
    next();
});

app.use(logResponse);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});