import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  useReducer } from "react";
import Screen from "./components/Screen.jsx";
import Holder from "./components/Holder.jsx";
import Result from "./components/Result.jsx";
import Nothing from "./components/Nothing.jsx";
import ContextWala from "./store/usingContext.jsx";

const todoItemReducerKhan = (currenttodoItems, action) => {
  let forNewItem = currenttodoItems;
  if (action.type === "New_Item") {
    if (action.payload.text != "" && action.payload.time != "") {
      forNewItem = [
        ...currenttodoItems,
        {
          id: currenttodoItems.length + 1,
          text: action.payload.text,
          time: action.payload.time,
        },
      ];
    }
  } else if (action.type === "delete_Item") {
     forNewItem = currenttodoItems.filter((each) => each.id !== action.payload.id);
  }
  return forNewItem;
};

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Learn React", time: "12:00" },
  //   { id: 2, text: "Learn Node.js", time: "12:00" },
  //   { id: 3, text: "Learn MongoDB", time: "12:00" },
  // ]);

  const [todos, dispatchTodoItems] = useReducer(todoItemReducerKhan, [
    { id: 1, text: "Learn React", time: "12:00" },
    { id: 2, text: "Learn Node.js", time: "12:00" },
    { id: 3, text: "Learn MongoDB", time: "12:00" },
  ]);

  const handleAddTodo = (text, time) => {
    const newItemAction = {
      type: "New_Item",
      payload: {
        text,
        time,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteTodo = (id) => {
     const deleteItemAction = {
      type: "delete_Item",
      payload: {
        id,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
        <center>
          {/* This is the only one not using the context api */}
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
