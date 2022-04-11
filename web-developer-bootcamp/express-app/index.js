const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('We got a new request');
//   res.send('<h1>This is my webpage!</h1>');
// });

app.get('/cats', (req, res) => {
  console.log('Cat request!!!');
  res.send({ name: 'Charlie', color: 'orange' });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
