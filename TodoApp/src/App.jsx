import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Screen from "./components/Screen.jsx";
import Holder from "./components/Holder.jsx";
import Result from "./components/Result.jsx";
import Nothing from "./components/Nothing.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", time: "12:00" },
    { id: 2, text: "Learn Node.js", time: "12:00" },
    { id: 3, text: "Learn MongoDB", time: "12:00" },
  ]);

  const handleAddTodo = (text, time) => {
    if (text != "" && time != "") {
      const newTodo = {
        id: todos.length + 1,
        text: text,
        time: time,
      };
      setTodos([...todos, newTodo]);
       
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <Holder>
      <center>
        <h1>Todo App</h1>
      </center>
      <Screen handleAddTodo={handleAddTodo} />
      {todos.map((each) => (
        <Result
          key={each.id}
          idn={each.id}
          text={each.text}
          time={each.time}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
      {todos.length === 0 && (
        <center>
          <Nothing />
        </center>
      )}
    </Holder>
  );
}

export default App;
