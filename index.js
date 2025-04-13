var express = require('express');
var app = express();

var todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Build CI/CD pipeline' }
];

app.get('/todos', function (req, res) {
  res.json(todos);
});

module.exports = app; // Export the app
