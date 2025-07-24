import React, { useState, useEffect } from 'react';
import { getcomments } from '/src/api/index';

function Comments() {
  const [commentsData, setCommentsData] = useState(null);
  useEffect(() => {
    getcomments().then((comments) => {
      setCommentsData(comments);
    });
  }, []);
  return (
    <div className="w-full min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="container p-5 space-y-5 ">
        {commentsData ? (
          commentsData.map((j) => (
            <div className=" p-5 border-2 rounded-lg">
              <h1>postId: {j.postId}</h1>
              <p>
                email: <span className="font-bold">{j.email}</span>
              </p>
              <p>Name : {j.name}</p>
              <p>Comments: {j.body}</p>
            </div>
          ))
        ) : (
          <p>Comments not found</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
