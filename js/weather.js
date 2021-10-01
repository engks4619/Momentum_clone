const API_KEY ="34dea78aaf9ef133096359369964fee1";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherIcon = document.querySelector(".weather-box .weather .weather-icon");
        const weatherData = document.querySelector(".weather-box .weather .weather-data");
        const city = document.querySelector(".weather-box .city");   
        const wIcon = document.createElement("img");         
        wIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        wIcon.style.verticalAlign = "middle";
        wIcon.style.filter = `brightness(0) invert(1)`;
        weatherIcon.appendChild(wIcon);
        city.innerText = data.name;
        weatherData.innerText = `${Math.round(data.main.temp)}℃`;
    });
    
}

function onGeoError(){
    alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
