/* global fetch */
window.onload = function () {
  var $playerContainer = document.querySelector('#players-container')
  var ctx = document.getElementById('myChart')
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
  // positions array
  var positionArray = []
  // function for pie chart info
  function findPosition () {
    fetch('/api/position')
      .then(results => results.json())
      .then(function (result) {
        positionArray = result
        console.log(positionArray)
        console.log(positionArray[0][('count(*)')])
        console.log(Object.getOwnPropertyNames(positionArray[0]))
        // pie chart
        /* eslint-disable no-unused-vars, no-undef */
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: [positionArray[0].position, positionArray[1].position, positionArray[2].position, positionArray[3].position, positionArray[4].position],
            datasets: [{
              data: [positionArray[0][('count(*)')], positionArray[1][('count(*)')], positionArray[2][('count(*)')], positionArray[3][('count(*)')], positionArray[4][('count(*)')]],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
            }]
          }
        })
      }
      )
  }
  findPosition()
}

// html to display as table
function createNewRow (players) {
  let newInputRow = `
       <tr><td><img src="${players.image}" height="115px" width="100px" class="rounded"> ${players.name}</td>
       <td>${players.jersey_number}</td>
       <td>${players.position}</td>
       <td>${players.games_played}</td>
       <td>${players.mins}</td>
       <td>${players.goals}</td>
       <td>${players.assists}</td>
       <td>${players.yel}</td>
       <td>${players.red}</td></tr>
        `

  return newInputRow
}
