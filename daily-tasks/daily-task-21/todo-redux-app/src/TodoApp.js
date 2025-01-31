// src/TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/todoActions';

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h1>Todo App with Redux</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
