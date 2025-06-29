import React from 'react';
import Form from './Form';

function index() {
  return (
    <div className="bg-blue-600 w-full h-screen flex justify-center items-center">
      <div className="container max-w-xl mx-auto p-7 my-20  rounded-lg text-center border-2 shadow-xl shadow-amber-50">
        <h1 className="text-5xl font-bold animate-pulse">
          Temperature Converter🌡️
        </h1>
        <div className="mt-6 grid grid-cols-1 place-items-center">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default index;
