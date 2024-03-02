const http = require('http');

const app = http.createServer();
const port = 1245;
const host = 'localhost';

app.on('request', (req, res) => {
  const responseMessage = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMessage.length);
  res.statusCode = 200;
  res.end(responseMessage);
});

app.listen(port, host, () => {});

module.exports = app;
