var app = require('./index');
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server running at http://localhost:' + port);
});
