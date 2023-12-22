const express = require('express');
const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

app.use('/api', middlewares, router);

app.use(express.static('build'));

app.get('/healthz', (_req, res) => {
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});
