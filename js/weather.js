const weatherIcon = document.getElementById("weatherI");

const API_KEY = "4fbccc77c98331be73c86f4ec3302b14";



function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const weather = document.getElementById("weather");
            const city = document.getElementById("city");
            const weatherData = data.weather[0].main;
            city.innerText = data.name;
            weather.innerText = `${weatherData} & ${Math.round((data.main.temp) - 272.15)} CΒΊ`;
            if (weatherData == "Clear") {
                weatherIcon.innerText = "π";
            } else if (weatherData == "Clouds") {
                weatherIcon.innerText = "β";
            } else if (weatherData == "Mist") {
                weatherIcon.innerText = "π«";
            } else if (weatherData == "Rain") {
                weatherIcon.innerText = "β";
            }
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

//1λ² μΈμ: μ±κ³΅νμμ μ€νλλ ν¨μ
//2λ² μΈμ: μ€ν¨μ μ€νλλ ν¨μ
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);