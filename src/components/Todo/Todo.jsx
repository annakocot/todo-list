import React, { useState } from "react";
import './Todo.css';

const Todo = ({ text, todo, todos, setTodos }) => {

  const [isEdit, setIsEdit] = useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }));
  };

  const editHandler = (e) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, text: e.target.value
        };
      }
      return item;
    }));
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      setIsEdit(false);
    }
  };

  return (
    <li className="todo">
      <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
       {
         isEdit ? (
          <input onChange={editHandler} onKeyDown={onKeyDownHandler} value={text} type="text" />
         ) : text
       }
      </div>
      <button onClick={() => setIsEdit(true)} className="edit-btn">
        <span className="fas fa-edit"></span>
      </button>
      <button onClick={completeHandler} className="complete-btn">
        <span className="fas fa-check"></span>
      </button>
      <button onClick={deleteHandler} className="delete-btn">
        <span className="fas fa-trash-alt"></span>
      </button>
    </li>
  );
}

export default Todo;
