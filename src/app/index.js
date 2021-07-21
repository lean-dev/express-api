const http = require('http');

const app = http.createServer((req, res) => {
  res.end('<h1>Node Boilerplate</h1>');
});

module.exports = app;
