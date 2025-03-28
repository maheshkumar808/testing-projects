import React from 'react';
function TodoList({ data, onDelete }) {
  return (
    <div>
      {data.map((item, index) => (
        <li className="text-left " key={index + 1}>
          {item}{' '}
          <button className="cursor-pointer" onClick={() => onDelete(index)}>
            ✖️
          </button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
