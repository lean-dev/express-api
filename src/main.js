const http = require('http');
const app = require('./app');

// Create Server
const server = http.createServer(app);
// Create Socket Server
const wss = require('./app/ws')(server);

app.set('wss', wss);

const port = 3000;

server.listen(port, () => {
  console.log(`Server started at port ${port}.`);
});
