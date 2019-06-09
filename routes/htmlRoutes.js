// Dependecies
const Team = require('../models/example')
const path = require('path')

/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'))
    Team.addPlayer(req.body)
      .then(results => {
      })
  })

  // Loads registration page
  app.get('/registration', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/registration.html'))
  })

  // Load page where coach builds the team and checks the weather
  app.get('/coach', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/coach.html'))
    // Team.findOne(req.params.id)
    //   .then(results => {
    //   })
  })

  // Load page to update the roster
  app.get('/update', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/update.html'))
    // Team.findOne(req.body)
    //   .then(results => {
    //   })
  })

  // Load team statistics page
  app.get('/team', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html/team.html'))
    Team.findAll()
      .then(results => {
        console.log(results)
      })
  })

  // Render 404 page for any unmatched routes
  // app.get('*', function (req, res) {
  //   res.render('404')
  // })
}
