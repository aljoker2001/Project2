var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
var Example = require('../models/example')
var expect = chai.expect

/* global describe, it, beforeEach */

// Setting up the chai http plugin
chai.use(chaiHttp)

var request

describe('GET /api/examples', function () {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  // this.timeout(15000)
  beforeEach(function () {
    request = chai.request(server)
    return Example.reset()
  })

  it('should find all examples', function (done) {
    // Add some examples to the db to test with
    Example.addPlayer([
      { name: 'First Example', image: 'First Description', jersey_number: 33, position: 'Goalkeeper' },
      { name: 'Second Example', image: 'Second Description', jersey_number: 4, position: 'Striker' }
    ]).then(function () {
      // Request the route that returns all examples
      request.get('/api/team').end(function (err, res) {
        var responseStatus = res.status
        var responseBody = res.body

        // Run assertions on the response

        expect(err).to.be.null // eslint-disable-line no-unused-expressions

        expect(responseStatus).to.equal(200)

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(2)

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ name: 'First Example', image: 'First Description', jersey_number: 33, position: 'Goalkeeper' })

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ name: 'Second Example', image: 'Second Description', jersey_number: 4, position: 'Striker' })

        // The `done` function is used to end any asynchronous tests
        done()
      })
    })
  })
})
