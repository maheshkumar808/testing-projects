import React, { useState } from 'react';
import Button from '../components/Button';

function index() {
  const [displayValue, setDisplayValue] = useState('');

  const handleClick = (value) => {
    setDisplayValue((prev) => prev + value);
  };
  function removeDigits() {
    setDisplayValue(displayValue.slice(0, -1));
  }
  const handleTotalValue = () => {
    setDisplayValue(String(eval(displayValue)));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-sm min-w-sm p-6 bg-amber-600 ">
        <h1 className="text-blue-800 font-extrabold text-4xl mb-4">
          Calculator
        </h1>
        <div className="bg-gray-300 text-end p-4 break-words overflow-hidden ">
          {displayValue || 0}
        </div>
        <div className=" mt-5 grid grid-cols-4 gap-4">
          <button
            onClick={() => setDisplayValue('')}
            className="col-span-2 bg-gray-300 p-3"
          >
            C
          </button>
          <button onClick={removeDigits} className="col-span-1 bg-gray-300 p-3">
            Del
          </button>
          <button
            onClick={() => handleClick('+')}
            className="col-span-1 bg-gray-300 p-3"
          >
            +
          </button>

          <button
            onClick={() => handleClick('1')}
            className="col-span-1 bg-gray-300 p-3"
          >
            1
          </button>
          <button
            onClick={() => handleClick('2')}
            className="col-span-1 bg-gray-300 p-3"
          >
            2
          </button>
          <button
            onClick={() => handleClick('3')}
            className="col-span-1 bg-gray-300 p-3"
          >
            3
          </button>
          <button
            onClick={() => handleClick('*')}
            className="col-span-1 bg-gray-300 p-3"
          >
            *
          </button>
          <button
            onClick={() => handleClick('4')}
            className="col-span-1 bg-gray-300 p-3"
          >
            4
          </button>
          <button
            onClick={() => handleClick('5')}
            className="col-span-1 bg-gray-300 p-3"
          >
            5
          </button>
          <button
            value={'6'}
            onClick={() => handleClick('6')}
            className="col-span-1 bg-gray-300 p-3"
          >
            6
          </button>
          <button
            onClick={() => handleClick('/')}
            className="col-span-1 bg-gray-300 p-3"
          >
            /
          </button>
          <button
            onClick={() => handleClick('7')}
            className="col-span-1 bg-gray-300 p-3"
          >
            7
          </button>
          <button
            onClick={() => handleClick('8')}
            className="col-span-1 bg-gray-300 p-3"
          >
            8
          </button>
          <button
            onClick={() => handleClick('9')}
            className="col-span-1 bg-gray-300 p-3"
          >
            9
          </button>
          <button
            onClick={() => handleClick('-')}
            className="col-span-1 bg-gray-300 p-3"
          >
            -
          </button>
          <button
            onClick={() => handleClick('.')}
            className="col-span-1 bg-gray-300 p-3"
          >
            .
          </button>
          <button
            onClick={() => handleClick('0')}
            className="col-span-1 bg-gray-300 p-3"
          >
            0
          </button>
          <button
            onClick={handleTotalValue}
            className="col-span-2 bg-gray-300 p-3"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
// import React, { useState } from 'react';

// export default function Calculator() {
//   const [input, setInput] = useState('');

//   const handleClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput('');
//   };

//   const handleCalculate = () => {
//     try {
//       // ⚠️ Use eval carefully – for production use a safer math parser (like mathjs)
//       setInput(String(eval(input)));
//     } catch {
//       setInput('Error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
//         <div className="bg-gray-200 p-4 rounded-lg text-right text-xl font-mono mb-4">
//           {input || '0'}
//         </div>
//         <div className="grid grid-cols-4 gap-2">
//           <button
//             onClick={handleClear}
//             className="col-span-2 bg-red-400 text-white p-4 rounded-lg"
//           >
//             C
//           </button>
//           <button
//             onClick={() => handleClick('/')}
//             className="bg-gray-300 p-4 rounded-lg"
//           >
//             ÷
//           </button>
//           <button
//             onClick={() => handleClick('*')}
//             className="bg-gray-500 p-4 rounded-lg"
//           >
//             ×
//           </button>

//           {[7, 8, 9].map((num) => (
//             <button
//               key={num}
//               onClick={() => handleClick(num)}
//               className="bg-gray-500 p-4 rounded-lg"
//             >
//               {num}
//             </button>
//           ))}
//           <button
//             onClick={() => handleClick('-')}
//             className="bg-gray-500 p-4 rounded-lg"
//           >
//             −
//           </button>

//           {[4, 5, 6].map((num) => (
//             <button
//               key={num}
//               onClick={() => handleClick(num)}
//               className="bg-gray-500 p-4 rounded-lg"
//             >
//               {num}
//             </button>
//           ))}
//           <button
//             onClick={() => handleClick('+')}
//             className="bg-gray-500 p-4 rounded-lg"
//           >
//             +
//           </button>

//           {[1, 2, 3].map((num) => (
//             <button
//               key={num}
//               onClick={() => handleClick(num)}
//               className="bg-gray-500 p-4 rounded-lg"
//             >
//               {num}
//             </button>
//           ))}
//           <button
//             onClick={handleCalculate}
//             className="row-span-2 bg-green-500 text-white p-4 rounded-lg"
//           >
//             =
//           </button>

//           <button
//             onClick={() => handleClick(0)}
//             className="col-span-2 bg-gray-500 p-4 rounded-lg"
//           >
//             0
//           </button>
//           <button
//             onClick={() => handleClick('.')}
//             className="bg-gray-500 p-4 rounded-lg"
//           >
//             .
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
