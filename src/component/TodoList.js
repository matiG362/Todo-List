import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import '../App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="title">
      <h1>To-Do List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;