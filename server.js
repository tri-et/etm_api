const http = require('http');
const app = require('./app');

const post = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(post);