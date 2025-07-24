import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-amber-500 ">
      <div className="p-6 text-center">
        <h1 className="my-5 text-4xl font-bold ">
          fetched api from jsonplaceholder
        </h1>
        <div className=" flex gap-5 justify-center">
          <Link to="/posts">
            <Button>Posts</Button>
          </Link>
          <Link to="/comments">
            <Button>Comments</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
