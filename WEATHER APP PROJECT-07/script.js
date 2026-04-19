
const apiKey = "73f698df41c950cf2318a681581d8c46";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox = document.querySelector("#inp")
const searchBtn = document.querySelector("#Btn")
const WeatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
                let data = await response.json()

    

    document.querySelector('.city').innerHTML = data.name
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

if (data.weather[0].main == "Clouds") {

    WeatherIcon.src = "images/Clouds.png";
} else if (data.weather[0].main == "Drizzle") {

    WeatherIcon.src = "images/drizzle.png";
}
  
 else if (data.weather[0].main == "Mist") {

    WeatherIcon.src = "images/mist.png";
}
 else if (data.weather[0].main == "Rain") {

    WeatherIcon.src = "images/rain.png";
}
 else if (data.weather[0].main == "Snow") {
    WeatherIcon.src = "images/snow.png";
}


document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display = "none"

}


    }
    
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value)
})