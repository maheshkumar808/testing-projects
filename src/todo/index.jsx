import React, { useState } from 'react';
import InputBox from './inputBox';
import TodoList from './TodoList';
import Swal from 'sweetalert2';

const index = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (!inputText.trim()) {
      Swal.fire({
        title: 'Empty Todo!',
        text: 'Please enter a todo item.',
        icon: 'warning',
      });
      return;
    }
    setListTodo([...listTodo, inputText]);
  };

  const onDelete = (indexValue) => {
    const filteredList = listTodo.filter((_, index) => index !== indexValue);
    setListTodo(filteredList);
  };
  return (
    <div className="bg-blue-500 w-full h-screen flex justify-center ">
      <div className="container max-w-sm mx-auto p-7 my-20  rounded-lg text-center border-2 hover:shadow-amber-800 hover:shadow-2xl">
        <h1 className="text-5xl font-bold">To-do-list</h1>
        <div className="mt-6 ">
          <InputBox addList={addList} />
        </div>
        <div className="mt-6">
          <TodoList data={listTodo} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default index;
