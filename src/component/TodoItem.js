import React from 'react';
import '../App.css';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="TodoItem">
      <span>{todo}</span>
      <button onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;