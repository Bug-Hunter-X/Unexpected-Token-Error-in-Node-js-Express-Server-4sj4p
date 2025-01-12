const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Solution: Correct the syntax error.  The error may be in an unexpected location
// This example shows a missing semicolon causing the error
// In a real scenario, the error may be due to something more subtle like an extra comma or an unmatched bracket