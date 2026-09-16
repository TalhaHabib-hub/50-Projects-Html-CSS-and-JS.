import { useContext, useEffect, useState } from "react";
import { ContextTalha } from "../store/ContextTalha";

const IfNoPosts = () => {
  const { postlist, allINone } = useContext(ContextTalha);
  const [fetched, setfetched] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://dummyjson.com/posts",signal)
      .then((res) => res.json())
      .then((data) => {
        (allINone(data.posts), setfetched(true));
      });
    return () => {
      console.log('kasa laga mara abort')
      controller.abort();
    };
  }, []);

  return (
    <>
      {postlist.length === 0 && fetched === false && (
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
      {postlist.length === 0 && fetched === true && (
        <center>
          <h1>There are no posts!</h1>
        </center>
      )}
    </>
  );
};

export default IfNoPosts;
