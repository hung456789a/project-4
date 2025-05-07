// index.js
require('dotenv').config();
const http = require('http');
const winston = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.log(err));


const logger = winston.createLogger({
  transports: [
    new LogstashTransport({
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
