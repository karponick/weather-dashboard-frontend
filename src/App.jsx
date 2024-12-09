import './App.css';
import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import AirDetails from './components/AirDetails/AirDetails';
import SunDetails from './components/SunDetails/SunDetails';
import HourlyTemperature from './components/HourlyTemperature/HourlyTemperature';
import { fetchWeatherData } from './services/api';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
  const [sunData, setSunData] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    try {
      const data = await fetchWeatherData(city.lat, city.lon);
      // console.log(data);
      setWeatherData({
        cityName: city.name,
        temperature: data.current.temp,
        feels_like: data.current.feels_like,
        description: data.current.weather[0].description,
      });

      setAirData({
        humidity: data.current.humidity,
        windSpeed: data.current.wind_speed,
      });

      setSunData({
        sunrise: new Date(data.current.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.current.sunset * 1000).toLocaleTimeString(),
      });
    } catch (error) {
      console.error('Error fetching weather details:', error.message);
    }
  };

  const toggleTemperatureUnit = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar onCitySelect={handleCitySelect} />
              {weatherData && (
                <>
                <div className="button">
                  <button onClick={toggleTemperatureUnit} className="tempButton">
                    {isFahrenheit ? "Switch to °C" : "Switch to °F"}
                  </button>
                </div>
                  <div className="hourly">
                    <Link to="/hourly-temperature">
                      <WeatherDetails
                        weatherData={weatherData}
                        isFahrenheit={isFahrenheit}
                      />
                    </Link>
                  </div>
                  <AirDetails airData={airData} />
                  <SunDetails sunData={sunData} />
                </>
              )}
            </div>
          }
        />
        <Route
          path="/hourly-temperature"
          element={
            selectedCity ? (
              <HourlyTemperature lat={selectedCity.lat} lon={selectedCity.lon} />
            ) : (
              <p>Please select a city first to view hourly data.</p>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;