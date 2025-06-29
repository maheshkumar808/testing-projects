import React from 'react';
import Form from './Form';

function index() {
  return (
    <div className="bg-blue-600 w-full  flex justify-center ">
      <div className="container max-w-xl mx-auto p-7 my-20  rounded-lg text-center border-2">
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
