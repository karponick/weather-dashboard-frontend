// import axios from 'axios';

// export const fetchWeatherData = async (lat, lon) => {
//   try {
//     const response = await axios.get('/api/weather', { params: { lat, lon } });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//   }
// };

export const fetchWeatherData = async (lat, lon) => {
  try {
    const queryParams = new URLSearchParams({ lat, lon }).toString();
    const response = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}?${queryParams}`);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = response.json();

    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};