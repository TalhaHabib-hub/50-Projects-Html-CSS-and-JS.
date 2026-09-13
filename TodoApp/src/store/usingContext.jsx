import { createContext } from "react";
import { useReducer } from "react";

export const ContextWala = createContext([{
     todos:[],
     handleAddTodo:()=>{},
     handleDeleteTodo:()=>{},
}]);

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



const ContextWalaIspaJan = ({children}) => {
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
        >{ children}</ContextWala.Provider>
      )
}

export default ContextWalaIspaJan;
