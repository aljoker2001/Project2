// Dependecies
const Team = require('../models/example')

/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    Team.findAll({})
      .then(function (dbExamples) {
        res.render('index', {
          msg: 'Welcome!',
          examples: dbExamples
        })
      })
  })

  // Load example page and pass in an example by id
  app.get('/example/:id', function (req, res) {
    Team.findOne({ where: { id: req.params.id } })
      .then(function (dbExample) {
        res.render('example', {
          example: dbExample
        })
      })
  })

  // Load team statistics page
  app.get('/statistics', function (req, res) {
    Team.findAll()
      .then(results => {
        console.log(results)
        res.json(results)
      })
  })
  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
