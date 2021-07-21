const request = require('supertest');
const app = require('../src/app');

describe('application homepage', () => {
  it('is served successfully', () => {
    return request(app).get('/').expect(200);
  });
});
