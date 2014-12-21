var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('jenkins testing 1 2 3', function(done) {
    request(app).get('/').expect('jenkins testing 1 2 3 6', done);
  });
});