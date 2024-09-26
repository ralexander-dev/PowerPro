const { readFile } = require('fs').promises;
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
  const data = await readFile('./index.html', 'utf8');
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
