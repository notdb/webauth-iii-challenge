exports.seed = function(knex, Promise) {
  return knex("users").insert([{ username: "firstUser", password: "abc123" }]);
};
