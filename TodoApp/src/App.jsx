import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Screen from "./components/Screen.jsx";
import Holder from "./components/Holder.jsx";
import Result from "./components/Result.jsx";
import Nothing from "./components/Nothing.jsx";
import ContextWala from "./store/usingContext.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", time: "12:00" },
    { id: 2, text: "Learn Node.js", time: "12:00" },
    { id: 3, text: "Learn MongoDB", time: "12:00" },
  ]);


  const handleAddTodo = (text, time) => {
    if (text != "" && time != "") {
      setTodos((currentValu) => [
        ...currentValu,
        {
          id: todos.length + 1,
          text: text,
          time: time,
        },
      ]);
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <ContextWala.Provider
      value={{
        todos: todos,
        handleAddTodo: handleAddTodo,
        handleDeleteTodo: handleDeleteTodo,
      }}
    >
      <Holder>
        <center> {/* This is the only one not using the context api */}
          <h1>Todo App</h1>
        </center>
        <Screen />
        <Result></Result>
        <Nothing></Nothing>
      </Holder>
    </ContextWala.Provider>
  );
}

export default App;
