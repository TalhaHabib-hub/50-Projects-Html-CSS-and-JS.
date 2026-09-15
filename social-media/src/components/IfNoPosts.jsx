import { useContext } from "react"
import { ContextTalha } from "../store/ContextTalha"

const IfNoPosts = () => {
const {postlist,allINone} = useContext(ContextTalha)

  
  const onRequest = () => {

    fetch("https://dummyjson.com/posts")
  .then(res => res.json())
  .then(data => allINone(data.posts)) 
  }
  return (
  <>
      {postlist.length === 0 && <center><h1>There are no posts!</h1><button type="button" className="btn btn-primary" onClick={onRequest}>Get Posts</button></center>}
      </>
  )
}

export default IfNoPosts;