import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

function Index() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const APIkey = import.meta.env.VITE_WEATHER_API_KEY;
  // const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

  const getCoordinates = async () => {
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`,
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        return { lat, lon };
      } else {
        // setError('City not found. Please try again.');
        Swal.fire({
          icon: 'error',
          title: 'City not found',
          text: 'Please try again.',
        });
        return null;
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while fetching location.',
      });
      console.error('Error fetching coordinates:', error);
      return null;
    }
  };

  const fetchWeather = async () => {
    const coordinates = await getCoordinates();
    if (!coordinates) return;

    try {
      const { lat, lon } = await getCoordinates();
      // console.log('cordinates', cordinates);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`,
      );
      console.log('Weather res', res);
      setWeather(res.data);
    } catch (error) {
      setError('Failed to fetch weather data.');
      console.log(error);
    }
  };

  const convertUnixToTime = (unixTimestamp) => {
    if (!unixTimestamp) {
      return 'N/A';
    }
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    return date.toLocaleTimeString(); // Convert to local time
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-400 to-indigo-600 flex flex-col justify-center items-center p-4">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-8 animate-pulse ">
        Weather App 🌤
      </h1>
      <div className="  rounded-2xl p-6 max-w-md w-full shadow-xl">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-3 rounded-xl border border-gray-300 text-black"
          />
          <Button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Search
          </Button>
        </div>
        {error && (
          <div className="mt-4 text-red-600 font-semibold">{error}</div>
        )}
        <div className="mt-6 grid grid-cols-2 gap-4 text-white">
          <div>City: {weather?.name}</div>
          <div>Deg: {weather?.wind?.deg}</div>
          <div>Sunrise: {convertUnixToTime(weather?.sys?.sunrise)}</div>
          <div>Sunset: {convertUnixToTime(weather?.sys?.sunset)}</div>
          <div>Wind: {weather?.wind.speed} m/s</div>
          <div>Humidity: {weather?.main.humidity}%</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
