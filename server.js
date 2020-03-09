const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/dist', express.static('dist'));

app.use(express.static(path.join(__dirname + '/assets')));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/daily-moods', (req, res, next) => {
  db.readMoods()
    .then(moods => res.send(moods))
    .catch(next);
});

app.post('/api/daily-moods', (req, res, next) => {
  db.createMood(req.body)
    .then(mood => res.send(mood))
    .catch(next);
});

app.put('/api/daily-moods/:id', (req, res, next) => {
  db.updateMood(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(next);
});

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  });
});
