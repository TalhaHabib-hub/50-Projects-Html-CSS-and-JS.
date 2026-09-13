import { createContext } from "react";

const ContextWala = createContext([{
     todos:[],
     handleAddTodo:()=>{},
     handleDeleteTodo:()=>{},
      }]);

export default ContextWala;

