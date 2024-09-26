const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  const data = await readFile('./index.html', 'utf8');
  res.send(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
