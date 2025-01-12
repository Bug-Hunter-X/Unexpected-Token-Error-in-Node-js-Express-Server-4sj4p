const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Uncommon bug: Unexpected token error in the middle of the code
// This is usually due to a syntax error somewhere in the code, even if it appears unrelated to the error location