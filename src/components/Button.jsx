import React from 'react';

function Button({ children, className, ...props }) {
  return (
    <div>
      <button
        {...props}
        className={`${className} py-2 px-4  rounded-sm  cursor-pointer font-bold`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
