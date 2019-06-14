// require('dotenv').config()
// var key = require('../../key')
// console.log(`log ${key}`)
// console.log(key.apixu)

// console.log(process.env.APIXU_KEY)
// weather data
var date
var maxTemp
var minTemp
var condition
var icon

var forecastContent = document.getElementById('ex')

document.querySelector('#run-search').addEventListener('click', function (event) {
  event.preventDefault()

  var input = document.getElementById('search-term').value
  input.value = ''
  if (input === '') {
    document.getElementById('search-term').setAttribute('placeholder', 'Please Enter a Location')

    return
  }
  var url = `https://api.apixu.com/v1/forecast.json?key=15f967ddf5344e2bb0e25104190706&q=${input}&days=7`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      forecastContent.innerHTML = ''
      console.log(data)
      var name = `${data.location.name}, ${data.location.region}`
      console.log(name)

      // create card parts
      var card = document.createElement('div')
      var cardBody = document.createElement('div')
      var h4 = document.createElement('h4')
      var table = document.createElement('table')
      var tbody = document.createElement('tbody')

      // add attributes to card parts
      card.setAttribute('class', 'card')
      card.setAttribute('style', 'width: 25rem;')
      cardBody.setAttribute('class', 'card-body pb-3')
      h4.setAttribute('class', 'card-title font-weight-bold')
      table.setAttribute('class', 'table table-borderless table-sm mb-0')

      // add content
      h4.innerHTML = name

      // build card
      // document.body.appendChild(card)
      forecastContent.appendChild(card)
      card.appendChild(cardBody)
      cardBody.appendChild(h4)
      cardBody.appendChild(table)
      table.appendChild(tbody)

      var i
      var forecastLength = data.forecast.forecastday.length
      for (i = 0; i < forecastLength; i++) {
        // capture forecast data
        date = data.forecast.forecastday[i].date
        maxTemp = `${data.forecast.forecastday[i].day.maxtemp_f}°`
        minTemp = `${data.forecast.forecastday[i].day.mintemp_f}°`
        condition = data.forecast.forecastday[i].day.condition.text
        icon = data.forecast.forecastday[i].day.condition.icon

        // create parts in loop
        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var p = document.createElement('p')
        var img = document.createElement('img')
        var span = document.createElement('span')

        // add attribute in loop
        td1.setAttribute('class', 'font-weight-normal align-middle')
        td2.setAttribute('class', 'float-right font-weight-normal')
        p.setAttribute('class', 'mb-1')
        img.setAttribute('src', icon)
        span.setAttribute('class', 'text-muted')

        // add content in loop
        td1.innerHTML = `${date} <br> ${condition}`
        p.innerHTML = `${maxTemp}/`
        span.innerHTML = minTemp

        // build content in loop
        tbody.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)
        td2.appendChild(p)
        p.appendChild(span)
        p.appendChild(img)        

        var textLog = `${date}, ${maxTemp}, ${minTemp}, ${condition}, ${icon}`

        console.log(textLog)
      }
    })
})
// `http://api.apixu.com/v1/forecast.json?key=${key}&q=${location}&days=7`
