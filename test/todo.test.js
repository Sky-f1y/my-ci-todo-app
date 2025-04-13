var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../index');
var server;

chai.use(chaiHttp);

describe('GET /todos', function () {
  before(function (done) {
    server = app.listen(3000, function () {
      console.log('Test server running');
      done();
    });
  });

  after(function (done) {
    server.close(done); // Close server after tests
  });

  it('should return an array of todos', function (done) {
    chai.request('http://localhost:3000')
      .get('/todos')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
