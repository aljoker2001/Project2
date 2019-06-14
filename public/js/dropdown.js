window.onload = function () {
  var dropdownData = []
  var strikersD = document.querySelectorAll('.strikers')

  var forwardsD = document.querySelectorAll('.forwards')

  var midfieldersD = document.querySelectorAll('.midfielders')

  var defendersD = document.querySelectorAll('.defenders')

  var goalkeepersD = document.querySelectorAll('.goalkeeper')
  var display = document.querySelector('.container')
  var positions = {}
  var forwards = []

  var defenders = []

  var goalkeepers = []

  var strikers = []

  var midfielders = []
  fetch('/api/team')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      createDropdowns(data)
      console.log('forwards', forwards)
      console.log('defenders', defenders)
      console.log('goalkeepers', goalkeepers)
      console.log('strikers', strikers)
      console.log('midfielders', midfielders)
    })

  var createDropdowns = (data) => {
    dropdownData = []
    for (let player of data) {
      switch (player.position) {
        case 'Goalkeeper':
          goalkeepers.push(player)
          break
        case 'Forward':
          forwards.push(player)
          break
        case 'Defender':
          defenders.push(player)
          break
        case 'Striker':
          strikers.push(player)
          break
        case 'Midfielder':
          midfielders.push(player)
          break
      }
    }
    dropdownArray(forwards, forwardsD)
    dropdownArray(defenders, defendersD)
    dropdownArray(goalkeepers, goalkeepersD)
    dropdownArray(strikers, strikersD)
    dropdownArray(midfielders, midfieldersD)
    positions.forwards = forwards
    positions.defenders = defenders
    positions.goalkeepers = goalkeepers
    positions.strikers = strikers
    positions.midfielders = midfielders
  }

  var dropdownArray = (posArray, menuVar) => {
    dropdownData = []
    for (let player of posArray) {
      if (!player.on_team) {
        dropdownData.push(player)
      }
    }
    createMenuItem(menuVar)
  }

  var createMenuItem = (buttonArr) => {
    for (let player of dropdownData) {
      for (let menu of buttonArr) {
        var item = document.createElement('a')
        item.setAttribute('class', 'dropdown-item')
        item.innerHTML = player.name
        item.dataset.id = player.id
        item.dataset.position = `${player.position.toLowerCase()}s`
        menu.append(item)
      }
    }
  }

  display.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(event.target)
    if (event.target.className === 'dropdown-item') {
      // var position = event.target.parentNode.classList[1]
      // var menu = document.querySelectorAll(`.${position}`)
      var arr = positions[event.target.dataset.position]
      console.log(arr)
      var player
      for (let p of arr) {
        console.log(event.target.dataset.id)
        /* eslint-disable eqeqeq */
        if (p.id == event.target.dataset.id) {
          player = p
          player.on_team = true
        }
      }
      fetch('/api/team', {
        method: 'PUT',
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
      })
        .then(results => {
          console.log(results)
        })
      // removeFromMenu(name, menu)
      console.log(event.target.parentNode.classList[1])
    }
  })
}
