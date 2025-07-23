import React from 'react';

function Button({ children, className, ...props }) {
  return (
    <div>
      <button
        {...props}
        className={`${className} py-2 px-4  rounded-sm  cursor-pointer font-bold border-2`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
