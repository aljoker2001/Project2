var display = document.querySelector('#playerDisplay')
/* eslint-disable no-undef */
fetch('/api/current')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    for (let player of data) {
      var playerSection = `<div class = col id = player${player.id}>
            <h2>${player.name} <strong>${player.jersey_number}</strong></h2>
            <form>
            Goals Scored: <input>
            </div>
            <button type="button" id="button${player.id}" class="btn btn-primary">Submit</button>`
      display.insertAdjacentHTML('afterbegin', playerSection)
    }
  })

var updateStats = (data) => {
  console.log(`This is button ${data.target.id}`)
  // fetch('/api/current', {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  // })
}

display.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    updateStats(event)
  }
})
