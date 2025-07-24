import React, { useState, useEffect } from 'react';
import { getPosts } from '/src/api';

function Posts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });
  }, []);
  return (
    <div className="w-full min-h-screen  p-8 space-y-5">
      {data ? (
        data.map((e) => (
          <div className=" p-6 border-2 border-white rounded-b-2xl hover:shadow-2xl hover:shadow-blue-500">
            <h1 className="text-3xl font-bold ">id: {e.id}</h1>
            <p className="text-blue-500">title: {e.title}</p>
            <p className="text-gray-600">body : {e.body}</p>
          </div>
        ))
      ) : (
        <p>Data not found</p>
      )}{' '}
    </div>
  );
}

export default Posts;
