const WebSocket = require('ws');

module.exports = (server) => {
  const wss = new WebSocket.Server({
    server,
  });

  /*
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      ws.send(`Thank you for ${message}`);
    });

    ws.send('something');
  });
  */

  return wss;
};
