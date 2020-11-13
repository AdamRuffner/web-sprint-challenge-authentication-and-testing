const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy,
  isValid,
  findById,
  insert,
};

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function insert(userData) {
    const [id] = await db('users').insert(userData, 'id')
    return db('users').where({ id }).first()
}

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}
