import { useContext, useEffect, useState } from "react";
import { ContextTalha } from "../store/ContextTalha";

const IfNoPosts = () => {
  const { postlist, allINone } = useContext(ContextTalha);
  useEffect(()=>{ fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => allINone(data.posts)
      ),[]})
  
  return (
    <>
      {postlist.length === 0&& (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{
              margin: "46px",
              height: "56px",
              width: "56px",
              color: "lightblue",
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {postlist.length === 0 && (
        <center>
          <h1>There are no posts!</h1>
        </center>
      )}
    </>
  );
};

export default IfNoPosts;
