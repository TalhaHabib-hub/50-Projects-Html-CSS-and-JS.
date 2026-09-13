import styles from "./Screen.module.css";
import { useRef } from "react";
import { MdDoneOutline } from "react-icons/md";
import {ContextWala} from "../store/usingContext";
import { useContext } from "react";

const Screen = () => {
  const duetask = useRef("");
  const duedate = useRef("");
  const { handleAddTodo } = useContext(ContextWala);
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo(duetask.current.value, duedate.current.value);
        duedate.current.value = "";
        duetask.current.value = "";
      }}
    >
      <input type="text" className={styles.screen} ref={duetask} />
      <input type="time" className={styles.time} ref={duedate} />
      <button type="submit" className={styles.add}>
        <MdDoneOutline />
      </button>
    </form>
  );
};
export default Screen;
