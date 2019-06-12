// cleans all tables and resets primary key

const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex);
};
