const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /teste/1
// Request params = { "name": "Bruno", "email": "bruno@rocketseat.com.br" }

const users = ['Diego', 'Cláudio', 'Victor', 'Bruno'];

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  
  users.splice(index, 1);

  return res.send('Usuário excluído com sucesso!');
})

server.listen(3000);