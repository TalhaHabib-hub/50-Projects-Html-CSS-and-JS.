import styles from './Result.module.css'
import { MdDelete } from "react-icons/md";


const Result = ({ text, time, handleDeleteTodo, idn}) => {
  return (
    <div className={styles.resultdiv}>
      <p className={styles.text}>{text}</p>
      <p className={styles.time}>{time}</p>
      <button className={styles.delete} onClick={() => handleDeleteTodo(idn)}>
        <MdDelete />
      </button>
    </div>
  )
}
export default Result;