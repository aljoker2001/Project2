/* eslint-disable no-unused-vars */
/* global fetch */
window.onload = function () {
  var $playerContainer = document.querySelector('#players-container')
  // initial players array
  var players = []
  // get players from database when page loads
  getPlayers()
  function getPlayers () {
    fetch('/api/team')
      .then(results => results.json())
      .then(function (data) {
        players = data
        console.log('get all data', players)
        initializeRows(players)
      })
  }
  // Add all rows to display them
  function initializeRows () {
    $playerContainer.innerHTML = ''
    var rowsToAdd = []
    for (var i = 0; i < players.length; i++) {
      rowsToAdd.push(createNewRow(players[i]))
      console.log(players[i])
    }
    // insert html, join to remove commas
    $playerContainer.insertAdjacentHTML('afterbegin', rowsToAdd.join(''))
  }
}

// html to display as table
function createNewRow (players) {
  let newInputRow = `
       <tr><td><img src="${players.image}" height="115px" width="100px" class="rounded"> ${players.name}</td>
       <td>${players.jersey_number}</td>
       <td>${players.position}</td>
       <td>${players.mins}</td>
       <td>${players.goals}</td>
       <td>${players.assists}</td>
       <td>${players.yel}</td>
       <td>${players.red}</td></tr>
        `

  return newInputRow
}
