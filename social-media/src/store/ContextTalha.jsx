import { useCallback,useEffect,useState } from "react";
import { createContext, useReducer } from "react";



export const ContextTalha = createContext({
  postlist: [],
  addPost: () => {},
  allINone: () => { },
  fetched: [],
  deletePost: () => {},
});


const postListReducer = (currPostList, action) => {
  let temp = currPostList;
  if (action.type === "ADD_ELEMENT") {
    temp = [action.payload.objreach,...currPostList]
    
  } else if (action.type === "DELETE_POST") {
    temp = currPostList.filter(each=>each.userId!=action.payload.userId)
  }else if (action.type === "ADD_EXISTING") {
    temp = action.payload
  }

  return temp;
}

const ContextTalhaProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(postListReducer, []);
  const [fetched, setfetched] = useState(false);
  
    //body-content, comments-likes useId-shares
  const addPost = (objreach) => {
    dispatchPostlist({
      type: "ADD_ELEMENT",
      payload: {
        objreach,
      }
    })
    
  }

  const allINone = (DataArray) => {
    dispatchPostlist({
      type:"ADD_EXISTING",
      payload: DataArray
      
    })
  }
  
  const deletePost =useCallback((userId) =>
  {
    dispatchPostlist({
      type: 'DELETE_POST',
      payload: {
        userId,
      }
    })
  }, [dispatchPostlist])
  
  
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://dummyjson.com/posts",signal)
      .then((res) => res.json())
      .then((data) => {
        (allINone(data.posts), setfetched(true));
      });
      console.log('fetching is called')
    return () => {
      console.log('kasa laga mara abort')
      controller.abort();
    };
  }, []);
  
  return (
    <ContextTalha.Provider value={{ postlist, addPost, deletePost,allINone,fetched }}>
      {children}
    </ContextTalha.Provider>
  );
}



export default ContextTalhaProvider;
