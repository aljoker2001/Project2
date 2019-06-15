
window.onload = function () {
  var dropdownData = []
  var strikersD = document.querySelectorAll('.strikers')

  var forwardsD = document.querySelectorAll('.forwards')

  var midfieldersD = document.querySelectorAll('.midfielders')

  var defendersD = document.querySelectorAll('.defenders')

  var goalkeepersD = document.querySelectorAll('.goalkeeper')
  var display = document.querySelector('.container')
  var currentTeam = document.querySelector('#onTeam')
  var positions = {}
  var forwards = []

  var defenders = []

  var goalkeepers = []

  var strikers = []

  var midfielders = []
  /* eslint-disable no-unused-vars */

  var teamPlayers
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

  var showCurrentTeam = () => {
    currentTeam.innerHTML = ''
    fetch('/api/current')
      .then(response => response.json())
      .then(data => {
        console.log('current team', data)
        for (let player of data) {
          var item = document.createElement('li')
          item.innerHTML = `${player.name} <strong>(${player.position})</strong>`
          currentTeam.append(item)
        }
      })
  }

  showCurrentTeam()

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
          showCurrentTeam()
        })
      // removeFromMenu(name, menu)
      console.log(event.target.parentNode.classList[1])
    }
  })

  // weather widget
  document.getElementById('run-search').addEventListener('click', function (event) {
    document.getElementById('display').innerHTML = ''
    document.getElementById('alert').innerHTML = ''
    var location = document.getElementById('search-term').value.trim()
    location.value = ''

    if (location === '') {
      document.getElementById('search-term').setAttribute('placeholder', 'ENTER A LOCATION')
      var alert = document.getElementById('alert')
      var p = document.createElement('p')
      alert.appendChild(p)
      p.setAttribute('class', 'font-weight-bold text-danger')
      p.innerHTML = 'ENTER A LOCATION'
      return
    }
    console.log(`Location: ${location}`)
    var url = `https://api.apixu.com/v1/forecast.json?key=15f967ddf5344e2bb0e25104190706&q=${location}&days=7`
    console.log(url)
    var display = document.getElementById('display')

    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data.location.name)
        var name = data.location.name

        var card = document.createElement('div')
        var body = document.createElement('div')
        var h4 = document.createElement('h4')
        var table = document.createElement('table')
        var tbody = document.createElement('tbody')

        display.appendChild(card)
        card.appendChild(body)
        body.appendChild(h4)
        body.appendChild(table)
        table.appendChild(tbody)

        card.setAttribute('class', 'card weather-card')
        body.setAttribute('class', 'card-body pb-3')
        h4.setAttribute('class', 'card-title font-weight-bold')
        table.setAttribute('class', 'table table-borderless table-sm mb-0')

        h4.innerHTML = name

        var i
        var forecastLength = data.forecast.forecastday
        for (i = 0; i < 7; i++) {
          console.log(forecastLength[i].date)
          var date = forecastLength[i].date
          var maxTemp = forecastLength[i].day.maxtemp_f
          var minTemp = forecastLength[i].day.mintemp_f
          var condition = forecastLength[i].day.condition.text
          var icon = forecastLength[i].day.condition.icon

          var tr = document.createElement('tr')
          var td1 = document.createElement('td')
          var td2 = document.createElement('td')
          var p = document.createElement('p')
          var td3 = document.createElement('td')
          var img = document.createElement('img')

          tbody.appendChild(tr)
          tr.appendChild(td1)
          tr.appendChild(td2)
          td2.appendChild(p)
          tr.appendChild(td3)
          td3.appendChild(img)

          td1.setAttribute('class', 'font-weight-normal align-middle')
          td2.setAttribute('class', 'float-right font-weight-normal')
          p.setAttribute('class', 'mb-1')
          td3.setAttribute('class', 'float-right mr-3')
          img.setAttribute('src', icon)

          td1.innerHTML = `${date} <br> ${condition}`
          p.innerHTML = `${maxTemp}/${minTemp}`
        }
      })
  })
}
