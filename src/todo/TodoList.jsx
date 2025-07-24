// export default TodoList;
import React from 'react';

function TodoList({ data, onDelete }) {
  return (
    <ol className=" space-y-2 ">
      {data.map((item, index) => (
        <li
          className="flex justify-between items-center  p-2  border-2 rounded-xl"
          key={index}
        >
          <span className="text-left">{item}</span>
          <button className="cursor-pointer" onClick={() => onDelete(index)}>
            ✖️
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;
