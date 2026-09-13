import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  useReducer } from "react";
import Screen from "./components/Screen.jsx";
import Holder from "./components/Holder.jsx";
import Result from "./components/Result.jsx";
import Nothing from "./components/Nothing.jsx";
import ContextWalaIspaJan from "./store/usingContext.jsx"


function App() {
  return (
   <ContextWalaIspaJan>
      <Holder>
        <center>
          <h1>Todo App</h1>
        </center>
        <Screen />
        <Result></Result>
        <Nothing></Nothing>
      </Holder>
    </ContextWalaIspaJan>
  );
}

export default App;
