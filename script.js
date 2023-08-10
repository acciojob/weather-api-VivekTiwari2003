//your JS code here. If required.

const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherDataDiv = document.getElementById("weatherData");

getWeatherBtn.addEventListener("click", () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={2907475f6f62b8b4828733a3a1425be1}";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            weatherDataDiv.textContent = `Current weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});
