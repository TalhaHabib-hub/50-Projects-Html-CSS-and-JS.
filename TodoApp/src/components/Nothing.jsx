import styles from "./Nothing.module.css";
import { useContext } from "react";
import {ContextWala} from "../store/usingContext";
const Nothing = () => {
  const {todos} = useContext(ContextWala);
  return (
    todos.length == 0 && (
      <center>
        <h1 className={styles.nothing}>Enjoy your free time!</h1>
      </center>
    )
  );
};
export default Nothing;
