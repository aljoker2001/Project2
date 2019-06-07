exports.up = function (knex, Promise) {
  return knex.schema.createTable('players', function (table) {
    table.increments('id')
    table.string('name').notNullable()
    table.integer('jersey_number').notNullable()
    table.string('position').notNullable()
    table.integer('games_played').notNullable()
    table.integer('goals').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('players')
}
