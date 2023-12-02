const http = require('http');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Set the response content type
    res.end('Hello world!'); // Send the response
  });

  // Start the server
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


  app.use(express.static('public'));