import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import './index.scss';

export default function HomeTodo() {
  const [todoValue, setTodoValue] = useState('');
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  const clearInput = () => {
    document.getElementById('todoValueInput').value = '';
    setTodoValue('');
  };

  const addTodo = (e) => {
    const inputValue = document.getElementById('todoValueInput').value;
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: todos.length,
          value: todoValue,
          isDone: false,
        },
      ]);
      localStorage.setItem(
        'todos',
        JSON.stringify([
          ...todos,
          {
            id: todos.length,
            value: todoValue,
            isDone: false,
          },
        ])
      );
    }
    clearInput();
  };

  const setTodoAsDone = (id) => {
    const todosNew = [...todos];
    todosNew.map((t) => {
      if (t.id === id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    setTodos(todosNew);
    localStorage.setItem('todos', JSON.stringify(todosNew));
  };
  const clearTodos = () => {
    setTodos([]);
    localStorage.setItem('todos', JSON.stringify([]));
  };
  const clearTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  };
  const clearDoneTodos = () => {
    setTodos(todos.filter((todo) => !todo.isDone));
    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo) => !todo.isDone))
    );
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-box">
        <h2 className="todo-header">Check-List</h2>
        <p className="todo-subheader">Here you can plan your studying</p>
        <form className="todo-form">
          <input
            placeholder="Enter Your tasks..."
            className="todo-input"
            id="todoValueInput"
            onChange={(e) => handleChange(e)}
            onSubmit={() => addTodo(event)}
          />

          <input
            className="todo-submit"
            type="submit"
            value="+"
            onClick={() => addTodo(event)}
          />
        </form>
        <div className="todo-button-wrapper">
          <button
            className="todo-button"
            onClick={() => {
              clearTodos();
            }}
          >
            Clear All
          </button>
          <button
            className="todo-button"
            onClick={() => {
              clearDoneTodos();
            }}
          >
            Clear Done
          </button>
        </div>
        <ul className="todos-wrapper">
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <div className="todos">
                  <li className={todo.isDone ? 'is-done' : 'todos-text'}>
                    {todo.value}
                  </li>
                  <button
                    className="todos-button"
                    onClick={() => setTodoAsDone(todo.id)}
                  >
                    <AiOutlineCheck size={20} color="white" />
                  </button>
                  <button
                    className="todos-button"
                    onClick={() => clearTodo(todo.id)}
                  >
                    <RxCross2 size={20} color="white" />
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
