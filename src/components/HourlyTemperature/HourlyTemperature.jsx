import React, { useEffect, useState } from 'react';
import "chart.js/auto";
import { Line } from 'react-chartjs-2';
// import axios from 'axios';
import { KtoF } from '../../helper';

const HourlyTemperature = ({ lat, lon }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const queryParams = new URLSearchParams({ lat, lon }).toString();
        const response = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}?${queryParams}`);
        if (!response.ok) {
          throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();

        setHourlyData(data.hourly);
      } catch (error) {
        console.error('Error fetching hourly data:', error);
      }
    };
    fetchHourlyData();
  }, [lat, lon]);

  const data = {
    labels: hourlyData.map((_, index) => `${index}h`),
    datasets: [
      {
        label: 'Temperature (°F)',
        data: hourlyData.map((hour) => KtoF(hour.temp)),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div className="hourly-temperature">
      <h2>Hourly Temperature</h2>
      <Line data={data} />
    </div>
  );
};

export default HourlyTemperature;
