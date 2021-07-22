const pool = require('./mysql-pool');

function mapRowToModel(rows) {
  return rows.map((row) => ({
    id: row.actor_id,
    firstname: row.first_name,
    lastname: row.last_name,
    updatedAt: row.last_update,
  }));
}

async function getAll() {
  const [rows] = await pool.query('SELECT * from actor');
  return mapRowToModel(rows);
}

async function getById(id) {
  const [rows] = await pool.execute('SELECT * FROM actor WHERE actor_id = ?', [
    id,
  ]);
  return mapRowToModel(rows)[0];
}

async function create(firstname, lastname) {
  const result = await pool.execute(
    'INSERT INTO actor (first_name, last_name) VALUES (? , ?)',
    [firstname, lastname]
  );
  const id = result[0].insertId;
  return {
    id,
    firstname,
    lastname,
  };
}

module.exports = {
  getAll,
  getById,
  create,
};
