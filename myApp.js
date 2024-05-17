const express = require('express');
const app = express();
const path = require('path');

// Serve static assets from the /public directory
app.use(express.static(path.join(__dirname, 'public')));
console.log("Hello World");

// Set up a route to serve the index.html file
app.get('/', function(req, res) {
  let absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Do not edit below this line
module.exports = app;
