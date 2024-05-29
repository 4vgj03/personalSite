import React, { useState, useRef } from 'react';
import axios from 'axios';
import './weatherApp.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState('');

  const cityInputRef = useRef(null);

  const getWeather = async (location) => {
    const apiKey = 'd8bc42c957603d20357d285ca93ef92d';
    const unit = 'Imperial';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      setWeatherData({
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });

      // Check if the weather description includes "clouds"
      if (data.weather[0].description.toLowerCase().includes('clouds')) {
        setBackgroundClass('clouds');
      } else {
        setBackgroundClass('');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setCity(value);
      if (state && value) {
        setState('');
    }
    } else {
      setState(value);
    }
    setWeatherData(null);  // Clear the weather data when user starts typing
    console.log(`Updated ${name} to: ${value}`);  // Debug log for input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      const location = state ? `${city},${state},US` : `${city},US`;
      console.log("Location is: " + location);  // Ensure this log is reached
      getWeather(location);
      cityInputRef.current.focus();
    } else {
      console.log("City is required");  // Debug log if city is not provided
    }
  };

  return (
    <div className={`weather-app ${backgroundClass}`}>
      <div className="form-form-container">
        <form onSubmit={handleSubmit}>
          <div className="align-left">
            <label htmlFor="cityInput">City Name: </label>
            <input
              id="cityInput"
              name="city"
              type="text"
              value={city}
              onChange={handleInputChange}
              placeholder="Enter city"
              ref={cityInputRef}
            />
          </div>
          <div className="align-left">
            <label htmlFor="stateInput">State (optional - USA Only): </label>
            <input
              id="stateInput"
              name="state"
              type="text"
              value={state}
              onChange={handleInputChange}
              placeholder="Enter state"
            />
          </div>
          <button type="submit">Go</button>
        </form>
  
        {weatherData && (
          <div className="weather-data">
            <p>The weather is {weatherData.description}.</p>
            <h1>The temperature in {city}{state && `, ${state}`} is: {weatherData.temp} degrees Fahrenheit</h1>
            <img src={weatherData.icon} alt="Weather icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
