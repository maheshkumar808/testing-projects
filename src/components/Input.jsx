import React from 'react';

function Input({ ...props }) {
  return (
    <div>
      <input {...props} className="p-2 bg-red-500 rounded-lg" />
    </div>
  );
}

export default Input;
