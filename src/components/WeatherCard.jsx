import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p className="weather-description">{weather.weather[0].description}</p>
      </div>

      <div className="weather-main">
        <div className="weather-temp">
          <h3>{weather.main.temp}°C</h3>
        </div>

        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
        </div>
      </div>

      <div className="weather-footer">
        <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
