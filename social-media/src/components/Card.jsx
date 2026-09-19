// import { useContext } from "react";
// import { ContextTalha } from "../store/ContextTalha";
import IfNoPosts from "./IfNoPosts";
import CardJunior from "./CardJunior";
import { useLoaderData } from "react-router-dom";

const Card = () => {
  const postlist = useLoaderData();
  return (
    <>
      <IfNoPosts />
      {postlist.map((each) => (
        <CardJunior each={each} key={each.id}></CardJunior>
      ))}
    </>
  );
};

export const postloaderJan = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;// this will be putted to main.jsx
    });
};

export default Card;
