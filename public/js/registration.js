var submit = document.querySelector('#submit')
var form = document.querySelector('form')

var addPlayer = (event) => {
  event.preventDefault()
  console.log(form.childNodes)
  var newPlayer = {
    name: form.childNodes[1].childNodes[3].value.trim(),
    image: form.childNodes[3].childNodes[3].value.trim(),
    position: form.childNodes[7].childNodes[1].value.trim()
  }
  console.log(newPlayer)
  /* eslint-disable no-undef */
  fetch('/api/team', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPlayer)
  })
    /* eslint-enable no-undef */
    .then(results => {
      console.log(results)
    })
  form.childNodes[1].childNodes[3].value = ''
  form.childNodes[3].childNodes[3].value = ''
  form.childNodes[7].childNodes[1].value = ''
}

submit.addEventListener('click', addPlayer)
