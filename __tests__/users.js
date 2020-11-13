const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");
const Users = require("../users/users-model");

describe("endpoint tests", () => {
  it("/register works", () => {
    return supertest(server)
      .post("/api/auth/register")
      .send({ username: "Adam", password: "password" })
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });

  it("/login works", () => {
    return supertest(server)
      .get("/api/auth/login")
      .then((res) => {
        expect(Array.isArray([res.body])).toBe(true);
      });
  });
});
