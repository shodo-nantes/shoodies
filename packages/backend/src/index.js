require('dotenv').config();

const { createServer } = require('./server');
createServer(4000);
