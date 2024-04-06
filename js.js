// Weather API
const apikey = "550ebd41da393e8d13c008120fcb4466";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}`;
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(`${apiurl}&q=${city}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/sunny.png";
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Rain" || data.weather[0].main == "Drizzle" || data.weather[0].main == "Mist") {
        weatherIcon.src = "images/rainy.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snowy.png";
    }    
    document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});


