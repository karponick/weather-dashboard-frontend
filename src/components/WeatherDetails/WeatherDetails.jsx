import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './WeatherDetails.module.css';
import { KtoF, KtoC } from '../../helper';

const WeatherDetails = ({ weatherData, isFahrenheit }) => {
  if (!weatherData) {
    return <p>Please select a city to view the weather details.</p>;
  }
  // console.log(weatherData);

  return (
    <div className={styles.weatherDetails}>
      <h2>Weather in {weatherData.cityName}</h2>
      <div className={styles.detailsCard}>
        <p><strong>Temperature:</strong> {isFahrenheit ? `${KtoF(weatherData.temperature)}°F` : `${KtoC(weatherData.temperature)}°C`}</p>
        <p><strong>Feels Like:</strong> {isFahrenheit ? `${KtoF(weatherData.feels_like)}°F` : `${KtoC(weatherData.feels_like)}°C`}</p>
        <p><strong>Description:</strong> {weatherData.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
        {/* THIS INFORMATION IS DISPLAYED THROUGH THE AIR AND SUN COMPONENTS
        <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind_speed} mph</p>
        <p><strong>Sunrise:</strong> {weatherData.sunrise}</p>
        <p><strong>Sunset:</strong> {weatherData.sunset}</p> */}
        <p className={styles.smallMsg}>-Click for Hourly Temperature-</p>
      </div>
    </div>
  );
};



export default WeatherDetails;
