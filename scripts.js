// openweatherapp API
const api = '87c1abb1625bf719099b2d9189f3bbad'

// selecting DOM elements
const iconImg = document.getElementById('weather-icon'),
    loc = document.querySelector('#location'),
    tempC = document.querySelector('.c'),
    tempF = document.querySelector('.f'),
    desc = document.querySelector('.desc'),
    sunriseDOM = document.querySelector('.sunrise'),
    sunsetDOM = document.querySelector('.sunset')

// event listener that fires up when page loads and executes the function
window.addEventListener('load', () => {
// store longitude and latitude
    let long 
    let lat 

// accessing user's geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude
            lat = position.coords.latitude

// JS fetch API, JS promise
            const base = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric'
            fetch(base)
            .then((response) => {
            return response.json();
        })

// JSON returns the response to an object. destructuring:
        .then ((data) => {
            const {temp} = data.main,
                place = data.name,
                {description, icon} = data.weather[0],
                {sunrise, sunset} = data.sys;

            const iconUrl = ' http://openweathermap.org/img/wn/${icon}@2x.png'
            const fahrenheit = (temp * 9) / 5 + 32

// converting epoch time to GMT
            const sunriseGMT = new Date(sunrise * 1000)
            const sunsetGMT = new Date(sunset * 1000)
        })
    }
})

// change src tag og the image
iconImg = iconUrl

// template literals
loc.textContent = `${place}`
desc.textContent = `${description}`
tempC.textContent = `${temp.toFixed(2)} °C`
tempF.textContent = `${fahrenheit.toFixed(2)} °F`
sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}`