// Dependencies
const Team = require('../models/example')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all players for the team
  app.get('/api/team', function (req, res) {
    Team.findAll()
      .then(results => {
        res.json(results)
      })
  })

  // Create a new example
  app.post('/api/examples', function (req, res) {
    Team.create(req.body)
      .then(results => {
        res.json(results)
      })
  })

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    Team.destroy(req.params)
      .then(results => {
        res.json(results)
      })
  })
}
