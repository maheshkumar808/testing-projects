import React from 'react';

function CalculatorButton({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${className} rounded-lg text-blue-600 font-bold bg-gray-300 py-2 px-4 cursor-pointer `}
    >
      {children}
    </button>
  );
}

export default CalculatorButton;
