import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div className="max-w-lg mx-auto">
        <h1 className="text-5xl text-blue-600 font-bold text-center">
          My small projects list
        </h1>
        <ul className="mt-8  list-disc text-left">
          <li className="hover:underline hover:text-blue-600">
            <Link to="/project/todo">TO DO list</Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link to="/project/temperature-converter">
              Temperature Converter
            </Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link to="/project/weatherApp">Weather App</Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link to="/project/authentication">
              Authentication With Firebase
            </Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link to="/jsonplaceholder/api">
              Fetch API from jsonplaceholder
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
