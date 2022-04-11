const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // console.log(req);
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});
// const server = http.createServer();

// server.on('connection', (socket) => {
//   console.log('New Connection...');
// });

server.listen(3000);

console.log(`Listening on port 3000...`);
