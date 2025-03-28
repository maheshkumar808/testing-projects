import React from 'react';
import Form from './Form';

function index() {
  return (
    <div className="bg-blue-500 w-full h-screen flex justify-center ">
      <div className="container max-w-lg mx-auto p-7 my-20  rounded-lg text-center ">
        <h1 className="text-5xl font-bold">Temperature Converter</h1>
        <div className="mt-6">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default index;
