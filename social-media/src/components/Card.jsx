import { useContext } from "react";
import { ContextTalha } from "../store/ContextTalha";
import IfNoPosts from "./IfNoPosts"
import CardJunior from "./CardJunior";
const Card = () => {
  const { postlist } = useContext(ContextTalha);
  return (
    <>
      <IfNoPosts/>
      {postlist.map((each) => (
        <CardJunior each={each} key={each.id}></CardJunior>
      ))}
    </>
  );
};

export default Card;
