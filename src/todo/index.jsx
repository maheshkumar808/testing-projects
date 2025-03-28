import React, { useState } from 'react';
import InputBox from './inputBox';
import TodoList from './TodoList';

const index = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  const onDelete = (indexValue) => {
    const filteredList = listTodo.filter((_, index) => index !== indexValue);
    setListTodo(filteredList);
  };
  return (
    <div className="bg-blue-500 w-full h-screen flex justify-center ">
      <div className="container max-w-lg mx-auto p-7 my-20  rounded-lg text-center ">
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
