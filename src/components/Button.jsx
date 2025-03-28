import React from 'react';

function Button({ children, ...props }) {
  return (
    <div>
      <button
        {...props}
        className="py-2 px-4  rounded-full bg-green-500 cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
