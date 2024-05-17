const express = require('express');
const app = express();
const path = require('path');

// Mount the express.static() middleware to serve static assets from the /public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Do not edit below this line
module.exports = app;
