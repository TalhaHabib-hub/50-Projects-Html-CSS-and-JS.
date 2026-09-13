import styles from "./ResultJunior.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import ContextWala from "../store/usingContext";

const ResultJunior = ({each}) => {
   const {handleDeleteTodo} = useContext(ContextWala)
  return (
    <div className={styles.resultdiv} >
      <p className={styles.text}>{each.text}</p>
      <p className={styles.time}>{each.time}</p>
      <button className={styles.delete} onClick={() => handleDeleteTodo(each.id)}>
        <MdDelete />
      </button>
    </div>
  )
}

export default ResultJunior;