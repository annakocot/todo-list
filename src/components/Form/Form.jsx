import React from "react";
import "./Form.css";

const Form = ({ inputText, addTodo, inputTextHandler, statusHandler }) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "" && inputText !== null) addTodo();
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <span className="fas fa-plus"></span>
      </button>
      <div>
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
