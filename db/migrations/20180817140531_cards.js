
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table)=> {
    table.increments();
    table.integer('mana');
    table.integer('attack');
    table.integer('health');
    table.string('description');
    table.timestamp(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards')
};
