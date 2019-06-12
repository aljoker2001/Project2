var submit = document.querySelector('#submit')
var form = document.querySelector('form')

var addPlayer = (event) => {
  event.preventDefault()
  console.log(form.childNodes)
  var newPlayer = {
    name: form.childNodes[1].childNodes[3].value.trim(),
    image: form.childNodes[3].childNodes[3].value.trim(),
    jersey_number: form.childNodes[5].childNodes[3].value.trim(),
    position: form.childNodes[9].childNodes[1].value.trim()
  }
  console.log(newPlayer)
  /* eslint-disable no-undef */
  if (isNaN(newPlayer.jersey_number)) {
    $('#errorNum').modal('show')
  } else if (newPlayer.name === '' || newPlayer.image === '' || newPlayer.position === '' || newPlayer.jersey_number === '' || newPlayer.jersey_number === '') {
    $('#errorModal').modal('show')
  }
  if (newPlayer.name !== '' && newPlayer.image !== '' && newPlayer.position !== '' && newPlayer.jersey_number !== '' && newPlayer.jersey_number !== '' && !isNaN(newPlayer.jersey_number)) {
    fetch('/api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlayer)
    })
      .then(results => {
        console.log(results)
      })
    form.childNodes[1].childNodes[3].value = ''
    form.childNodes[3].childNodes[3].value = ''
    form.childNodes[5].childNodes[3].value = ''
    form.childNodes[9].childNodes[1].value = ''
    // show modal
    $('#myModal').modal('show')
    /* eslint-enable no-undef */
  }
}

submit.addEventListener('click', addPlayer)
