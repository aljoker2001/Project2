exports.up = function (knex, Promise) {
  return knex.schema.createTable('players', function (table) {
    table.increments('id')
    table.string('name').notNullable()
    table.integer('jersey_number').notNullable()
    table.string('position').notNullable()
    table.integer('games_played').nullable()
    table.integer('mins').nullable()
    table.integer('goals').nullable()
    table.integer('assists').nullable()
    table.integer('yel').nullable()
    table.integer('red').nullable()
    table.boolean('on_team')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('players')
}
