// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies

/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */
/* eslint-disable no-undef */
// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile'))

// Exports the connection for other files to use
module.exports = Knex
