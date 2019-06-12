var display = document.querySelector('#playerDisplay')
var dropdown = document.querySelector('.dropdown-menu')
var modalButton
var modalTitle = document.querySelector('.modal-title')
var modalBody = document.querySelector('.modal-body')

/* eslint-disable no-undef */
fetch('/api/current')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    var dropdownData = []
    for (let player of data) {
      dropdownData.push(player.name)
    }
    for (let player of dropdownData) {
      var item = document.createElement('a')
      item.setAttribute('class', 'dropdown-item')
      item.innerHTML = player
      dropdown.append(item)
    }
  })

// Displays the selected player for adding the stats
var showPlayer = (data) => {
  display.innerHTML = ''
  fetch('/api/current')
    .then(response => response.json())
    .then(results => {
      console.log('results', results)
      console.log(data)
      for (let player of results) {
        if (data.target.innerHTML === player.name) {
          var playerSection = `  <div class="card mb-3 bg-secondary" style = "max-width: 540px;" >
                  <div class="row no-gutters">
                  <div class="col-md-4 m-auto">
                  <img src="${player.image}" class="card-img ml-3" alt="${player.name}">
                  </div>
                  <div class="col-md-8">
                  <div class="card-body pb-0 pr-0">
                  <h5 class="card-title text-light">${player.name} | <strong>${player.jersey_number}</strong></h5>
                  <form class="text-light col-12 justify-content-center d-flex flex-wrap">
                  <label class="col-12 d-flex justify-content-center">Minutes Played:</label><br>
                  <input type: "number"><br>
                  <label class="col-12 d-flex justify-content-center">Goals Scored:</label><br>
                  <input type: "number"><br>
                  <label class="col-12 d-flex justify-content-center">Assists:</label><br>
                  <input type: "number"><br>
                  <label class="col-12 d-flex justify-content-center">Yellow Cards:</label><br>
                  <input type: "number"><br>
                  <label class="col-12 d-flex justify-content-center">Red Cards:</label><br>
                  <input type: "number"><br>
                  </form>
                  <button type="button" id="${player.id}" class="btn btn-dark my-3" data-toggle="modal" data-target="#myModal">Submit</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>`
          display.insertAdjacentHTML('afterbegin', playerSection)
          modalButton = document.getElementById(player.id)
        }
      }
    })
}

var updateStats = (data) => {
  console.log(modalButton)
  modalTitle.innerHTML = 'Updated!'
  modalBody.innerHTML = 'Stats have been registered.'
  // modalButton.setAttribute('data-toggle', 'modal')
  console.log(`This is button ${data.target.id}`)
  console.log(data)
  for (let val of data.target.previousElementSibling) {
    if (isNaN(val.value) || val.value === '') {
      modalTitle.innerHTML = '<i class="far fa-frown fa-3x"></i>'
      modalBody.innerHTML = 'Please complete every field with a number'
      // modalButton.setAttribute('data-toggle', '')
      return false
    }
  }
  var newGoals = {
    id: data.target.id,
    mins: data.target.previousElementSibling[0].value.trim(),
    goals: data.target.previousElementSibling[1].value.trim(),
    assists: data.target.previousElementSibling[2].value.trim(),
    yel: data.target.previousElementSibling[3].value.trim(),
    red: data.target.previousElementSibling[4].value.trim()
  }
  console.log(newGoals)
  console.log(data.target.previousElementSibling.firstChild.nextSibling.value)
  fetch('/api/current', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newGoals)
  })
    .then(data => {
      console.log(data)
    })
  console.log(data.target.previousElementSibling)
  for (let val of data.target.previousElementSibling) {
    val.value = ''
  }
}

display.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.target.tagName === 'BUTTON') {
    updateStats(event)
  }
})

dropdown.addEventListener('click', function (event) {
  event.preventDefault()
  console.log(event.target)
  if (event.target.className === 'dropdown-item') {
    showPlayer(event)
  }
})
