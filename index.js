const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /teste/1
// Request params = { "name": "Bruno", "email": "bruno@rocketseat.com.br" }

const users = ['Diego', 'Cláudio', 'Victor', 'Bruno'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);