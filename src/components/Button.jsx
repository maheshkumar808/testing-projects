import React from 'react';

function Button({ children, color = 'bg-green-500', ...props }) {
  return (
    <div>
      <button
        {...props}
        className={`${color} py-2 px-4  rounded-full  cursor-pointer font-bold`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
