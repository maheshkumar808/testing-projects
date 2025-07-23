import React, { useState } from 'react';
import Button from '../components/Button';

function index() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    }
    if (count === 20) {
      alert(
        'Count has reached 20!, Now you cannot increase count value greater than 20',
      );
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count > 0) {
      alert(
        'Count has reached 0 , Now you cannot Decrese count value less than 0 ',
      );
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container">
        <h1 className="text-3xl text-center mb-8">Count : {count} </h1>
        <div className="flex justify-center items-center gap-5">
          {/* <Button onClick={() => setCount(count + 1)}>Increment </Button>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button> According this we cannot add validations*/}
          <Button onClick={handleIncrement}>Increment </Button>
          <Button onClick={handleDecrement}>Decrement</Button>
        </div>
      </div>
    </div>
  );
}

export default index;
