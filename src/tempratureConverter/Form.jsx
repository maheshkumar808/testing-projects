import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function Form() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setfFhrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');
  const handleCelsiusChange = (e) => {
    const c = e.target.value;

    setCelsius(c);
    setfFhrenheit(c !== '' ? ((c * 9) / 5 + 32).toFixed(2) : '');
    setKelvin(c !== '' ? parseFloat(c) + 273.15 : '');
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setfFhrenheit(f);
    setCelsius(f !== '' ? (((f - 32) * 5) / 9).toFixed(2) : '');
    setKelvin(f !== '' ? (((f - 32) * 5) / 9 + 273.15).toFixed(2) : '');
  };

  const handleKelvinChange = (e) => {
    const k = e.target.value;
    setKelvin(k);
    setfFhrenheit(k !== '' ? (((k - 273.15) * 9) / 5 + 32).toFixed(2) : '');
    setCelsius(k !== '' ? (k - 273.15).toFixed(2) : '');
  };
  const clearData = () => {
    setCelsius(0);
    setfFhrenheit(0);
    setKelvin(0);
  };
  return (
    <form className="space-y-4 text-left">
      <div>
        <label className="block text-lg font-semibold mb-1">Celsius</label>
        <Input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          className="w-full p-2 rounded border"
        />
      </div>
      <div>
        <label className="block text-lg font-semibold mb-1">Fahrenheit</label>
        <Input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="w-full p-2 rounded border"
        />
      </div>
      <div>
        <label className="block text-lg font-semibold mb-1">Kelvin</label>
        <Input
          type="number"
          value={kelvin}
          onChange={handleKelvinChange}
          className="w-full p-2 rounded border"
        />
      </div>
      <div className="flex justify-center">
        <Button type="button" onClick={clearData}>
          CLEAR
        </Button>
      </div>
    </form>
  );
}

export default Form;
