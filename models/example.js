// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
 * Queries the Example database
 *
 * @class Example
 */
class Team {
  constructor (table = 'players') {
    this.table = table
  }

  /**
   *
   * Find all Examples in the table
   * @returns Promise
   * @memberof Example
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  // Selects all players who are on the current team
  currentTeam () {
    return knex.select()
      .table(this.table)
      .where('on_team', true)
  }

  // Updates statistics for players who were selected for the team
  update (values) {
    return knex(this.table)
      .where('id', values.id)
      .update({
        goals: knex.raw(`?? + ${values.goals}`, ['goals']),
        assists: knex.raw(`?? + ${values.assists}`, ['assists']),
        mins: knex.raw(`?? + ${values.mins}`, ['mins']),
        yel: knex.raw(`?? + ${values.yel}`, ['yel']),
        red: knex.raw(`?? + ${values.red}`, ['red'])
      })
  }

  /**
 * create a new record
 *
 * @param {Object} values The values to insert in the form of {column: value}
 * @returns Promise
 * @memberof Example
 */
  addPlayer (values) {
    return knex(this.table)
      .returning('id')
      .insert({
        name: values.name,
        image: values.image,
        jersey_number: values.jersey_number,
        position: values.position
      })
  }

  onTeam (id) {
    var query = knex(this.table)
      .where('id', id)
    var boolean = knex.select('on_team').table(this.table).where('id', id)
    if (boolean) {
      return query.update('on_team', false)
    } else {
      return query.update('on_team', true)
    }
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Example
   */
  removePlayer (id) {
    return knex(this.table)
      .where('id', id)
      .del()
  }

  reset () {
    return knex(this.table)
      .truncate()
  }
}

module.exports = new Team()
