import React from 'react';
import uuid from 'react-uuid';
import './Form.css';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, filterHandler }) => {
  const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== '' && inputText !== null) {
      setTodos([...todos, { text: inputText, completed: false, id: uuid() }]);
      setInputText('');
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
    filterHandler();
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
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
}

export default Form;
