import React from 'react';

function Input({ ...props }) {
  return (
    <div>
      <input {...props} className="p-2 border-2 border-slate-200 rounded-lg" />
    </div>
  );
}

export default Input;
