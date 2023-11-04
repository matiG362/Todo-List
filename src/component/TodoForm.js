import React, { useState } from 'react';
import '../App.css';

const TodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
     <div className="input-container">
  <div className="input-wrapper">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Add a new todo"
    />
    <button type="submit">Add</button>
  </div>
</div>
    </form>
  );
};

export default TodoForm;