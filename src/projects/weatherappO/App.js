// src/WeatherApp.js
import React, { useState } from 'react';

const WeatherApp = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'd8bc42c957603d20357d285ca93ef92d';

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Imperial&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityInput">City Name: </label>
        <input
          id="cityInput"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>

      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <p>The weather is {weatherData.weather[0].description}.</p>
          <h1>The temperature in {cityName} is: {weatherData.main.temp} degrees Fahrenheit</h1>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
