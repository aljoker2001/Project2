exports.up = function (knex, Promise) {
  knex.schema.hasTable('players')
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable('players', function (table) {
          table.increments('id')
          table.string('image')
          table.string('name').notNullable()
          table.integer('jersey_number').notNullable()
          table.string('position').notNullable()
          table.integer('games_played').defaultTo(0)
          table.integer('mins').defaultTo(0)
          table.integer('goals').defaultTo(0)
          table.integer('assists').defaultTo(0)
          table.integer('yel').defaultTo(0)
          table.integer('red').defaultTo(0)
          table.boolean('on_team').defaultTo(false)
        })
      }
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('players')
}
