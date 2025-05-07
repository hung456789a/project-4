// index.js
const http = require('http');
const winston = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Logstash({
      port: 5000,
      node_name: 'my-node-app',
      host: 'localhost' // địa chỉ Logstash
    })
  ]
});

const server = http.createServer((req, res) => {
  logger.info('Received request', { url: req.url });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

server.listen(3000, () => {
  logger.info('Server started on port 3000');
  console.log('Server running at http://localhost:3000/');
});
