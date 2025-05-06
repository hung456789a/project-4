const net = require('net');

const logstash = net.createConnection({ port: 5000, host: 'logstash' });

function log(data) {
  logstash.write(JSON.stringify({
    app: 'todoapp',
    level: 'info',
    message: data,
    timestamp: new Date()
  }) + '\n');
}

log('Node.js app started');
