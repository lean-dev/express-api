const request = require('supertest');
const passport = require('passport');
const filmModel = require('../../src/app/model/film');

passport.authenticate = jest.fn((authType, options, done) => () => {
  console.log('Called with', authType, options);
  done(null, { account: 'egal' });
});

const app = require('../../src/app');

describe('film api', () => {
  it('can list all movies', () => {
    return request(app)
      .get('/api/film')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  it('can retrieve single movie', () => {
    filmModel.getById = jest.fn(async () => {
      return { id: 17, title: 'Yep' };
    });
    return request(app)
      .get('/api/film/1')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});
