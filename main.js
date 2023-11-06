const express = require('express');
const EventEmitter = require('events');

const sseEmitter = new EventEmitter();
const app = express();

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  console.log(req.path)

  // Listen for specific server events and send them to the client as SSE
  sseEmitter.on('message', (message) => {
    res.write(`data: ${message}\n\n`);
  });
});

// Simulate a real-world event that triggers SSE messages
setTimeout(() => {
  sseEmitter.emit('message', 'New message 1');
}, 3000);

setTimeout(() => {
  sseEmitter.emit('message', 'New message 2');
}, 5000);

app.listen(3000);
