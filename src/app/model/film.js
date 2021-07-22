const Knex = require('knex').default;

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: process.env.SAKILA_HOST,
    port: process.env.SAKILA_PORT,
    user: process.env.SAKILA_USERNAME,
    password: process.env.SAKILA_PASSWORD,
    database: process.env.SAKILA_DB,
  },
});

async function getAll() {
  const result = knex.from('film').select({
    id: 'film.film_id',
    title: 'film.title',
    description: 'film.description',
    releaseYear: 'film.release_year',
  });
  return result;
}

async function getById(id) {
  const result = await knex
    .from('film')
    .select({
      id: 'film_id',
      title: 'title',
      description: 'description',
      releaseYear: 'release_year',
    })
    .where('film_id', id);
  return result[0];
}

async function create(title) {
  const result = await knex('film').insert({ title, language_id: 1 }, [
    'film_id',
  ]);
  return getById(result[0]);
}

module.exports = {
  getAll,
  getById,
  create,
};
