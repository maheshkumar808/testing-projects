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
    <form>
      <label>celsius</label>
      <Input type="number" value={celsius} onChange={handleCelsiusChange} />
      <br />
      <label>fahrenheit</label>
      <Input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <br />
      <label>kelvin</label>
      <Input value={kelvin} onChange={handleKelvinChange} />
      <br />
      <Button onClick={clearData}>CLEAR</Button>
    </form>
  );
}

export default Form;
