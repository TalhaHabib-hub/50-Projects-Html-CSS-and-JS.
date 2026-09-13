import { createContext } from "react";

const ContextWala = createContext([{
  //       todos: todos,
  //       handleAddTodo: handleAddTodo,
  // handleDeleteTodo: handleDeleteTodo,
  // the above are key value are same so using js short cut i wrote these as
     todos:[],
     handleAddTodo:()=>{},
     handleDeleteTodo:()=>{},
      }]);

export default ContextWala;