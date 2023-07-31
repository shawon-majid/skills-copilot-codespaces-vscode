// create a web server

// 1. require http module
const http = require('http');

// 2. create a server object
// req: request
// res: response
const server = http.createServer((req, res) => {
  // 3. handle request
  // set status code
  res.statusCode = 200;
  // set header
  res.setHeader('Content-Type', 'text/plain');
  // send response
  res.end('Hello World\n');
});

// 4. start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});