import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [
    todos,
  ]);

  useEffect(() => {
    (() => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    })();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [status, todos]);

  const addTodo = () => {
    setTodos([...todos, { text: inputText, completed: false, id: uuid() }]);
    setInputText("");
  };

  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
      </header>
      <Form
        inputText={inputText}
        addTodo={addTodo}
        inputTextHandler={(e) => setInputText(e.target.value)}
        statusHandler={(e) => setStatus(e.target.value)}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
