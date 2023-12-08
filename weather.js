function fetchWeather(apiKey) {
    const locationInput = document.getElementById('location-input');
    const locationName = document.getElementById('location-name');
    const weatherDesc = document.getElementById('weather-desc');
    const temp = document.getElementById('temp');
    const weatherContainer = document.getElementById('weather-container');

    const location = locationInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const { name } = data;
            const { description } = data.weather[0];
            const { temp: currentTemp } = data.main;

            locationName.textContent = name;
            weatherDesc.textContent = description;
            temp.textContent = `${currentTemp} K`;
            weatherContainer.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

document.getElementById('location-button').addEventListener('click', () => {
    const apiKey = 'Y777'; // Replace with your actual API key from OpenWeatherMap
    fetchWeather(apiKey);
});