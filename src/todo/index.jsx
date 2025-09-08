import React from 'react';
import InputBox from './inputBox';
function index() {
  return (
    <div className="w-full h-screen bg-blend-soft-light flex justify-center items-center">
      <div className="max-w-sm bg-blue-700 p-6 rounded-b-2xl">
        <h1 className="text-center text-5xl text-white font-bold mb-4">
          TodoList
        </h1>
        <InputBox />
      </div>
    </div>
  );
}

export default index;
