//your JS code here. If required.

const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherDataDiv = document.getElementById("weatherData");

getWeatherBtn.addEventListener("click", () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY_HERE";
    
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
