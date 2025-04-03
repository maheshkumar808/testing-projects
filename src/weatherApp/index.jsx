import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';

function index() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
  // const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

  const getCoordinates = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`,
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        return { lat, lon };
      } else {
        console.log('City not found.');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const fetchWeather = async () => {
    try {
      const { lat, lon } = await getCoordinates();
      // console.log('cordinates', cordinates);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`,
      );
      console.log('Weather res', res);
      setWeather(res.data);
    } catch (error) {
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
    <div className="h-screen text-center flex flex-col justify-center items-center">
      <h1 className="text-7xl  bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text ">
        Weather App🌤
      </h1>
      <div className="container mx-auto  max-w-sm text-center mt-10 p-5 bg-gray-950 rounded-lg">
        <div className="flex justify-start gap-x-4">
          <Input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button onClick={fetchWeather} color="bg-gray-900">
            Enter
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2  place-items-start">
          <div className="col-span-1">city:{weather?.name}</div>
          <div>Deg: {weather?.wind?.deg}</div>
          <div>Sunrise: {convertUnixToTime(weather?.sys?.sunrise)}</div>
          <div>Sunset: {convertUnixToTime(weather?.sys?.sunset)} </div>
          <div>Wind speed: {weather?.wind.speed}</div>
          <div>Humidity: {weather?.main.humidity}</div>
        </div>
      </div>
    </div>
  );
}

export default index;
