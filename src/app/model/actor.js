const pool = require('./mysql-pool');

async function getAll() {
  const [rows] = await pool.query('SELECT * from actor');
  return rows;
}

async function getById(id) {
  // use pool
  // pool.query
  // return data
}
async function create(firstname, lastname) {}
async function update(id, actor) {}
async function remove(id) {}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
