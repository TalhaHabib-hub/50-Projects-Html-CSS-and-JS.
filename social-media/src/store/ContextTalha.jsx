import { createContext, useReducer } from "react";



export const ContextTalha = createContext({
  postlist: [],
  addPost: () => {},
  allINone:() =>{},
  deletePost: () => {},
});


const postListReducer = (currPostList, action) => {
  let temp = currPostList;
  if (action.type === "ADD_ELEMENT") {
    temp = [...currPostList, action.payload]
    
  } else if (action.type === "DELETE_POST") {
    temp = currPostList.filter(each=>each.id!=action.payload.id)
  }else if (action.type === "ADD_EXISTING") {
    temp = action.payload
  }

  return temp;
}

const ContextTalhaProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(postListReducer,[]);
  
  const addPost = (title, likes, content, comments, shares, tags) => {
    console.log(title,likes,content,comments,shares,tags)
    dispatchPostlist({
      type: "ADD_ELEMENT",
      payload: {
        id: Date.now(),
       title,likes,content,comments,shares,tags
      }
    })
    
  }

  const allINone = (DataArray) => {
    dispatchPostlist({
      type:"ADD_EXISTING",
      payload: {
        DataArray
      }
    })
  }
  
  const deletePost = (id) =>
  {
    dispatchPostlist({
      type: 'DELETE_POST',
      payload: {
        id,
      }
    })
  }
  return (
    <ContextTalha.Provider value={{ postlist, addPost, deletePost,allINone }}>
      {children}
    </ContextTalha.Provider>
  );
}



export default ContextTalhaProvider;
