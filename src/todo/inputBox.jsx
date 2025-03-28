import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function InputBox(props) {
  const [inputText, setInputText] = useState('');
  return (
    <div className="flex  justify-center gap-4 ">
      <Input
        type="text"
        placeholder="Enter your task"
        className="input-box-todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button
        className="btn"
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        Enter
      </Button>
    </div>
  );
}
export default InputBox;
