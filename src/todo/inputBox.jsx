import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '/src/components/Button';

function inputBox() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const handleAdd = () => {
    if (inputText.trim() == '') {
      alert('plese enter todo');
    }
    if (inputText !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };
  const handleDelete = (indextodelet) => {
    setItems(items.filter((_, index) => index !== indextodelet));
  };
  return (
    <div className="max-w-sm">
      <div className="flex justify-between space-x-5">
        <Input
          placeholder="enter your todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <ul className="mt-6 space-y-4 ">
        {items.map((item, index) => (
          <li
            className="p-2 flex justify-between items-top bg-amber-500  border-2 border-amber-50 rounded-b-2xl"
            key={index}
          >
            <span className="flex-1 break-words  overflow-hidden mr-2">
              {items}
            </span>

            <Button onClick={() => handleDelete(index)}>Delete</Button>
          </li> // Use a unique key for list items
        ))}
      </ul>
    </div>
  );
}

export default inputBox;
