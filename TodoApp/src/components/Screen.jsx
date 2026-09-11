import styles from './Screen.module.css'
import {useState} from 'react'
import { MdDoneOutline } from "react-icons/md";


const Screen = ({ handleAddTodo ,handleEnter}) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const handlehere=(text, time) => {
    handleAddTodo(text, time);
    setText("");
    setTime("");
  }
  return (
     <>
      <input type="text" className={styles.screen} value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event)=>handleEnter(event)}/>
      <input type="time" className={styles.time} value={time} onChange={(event) => setTime(event.target.value)} onKeyDown={(event)=>handleEnter(event)}/>
      <button className={styles.add} onClick={() => {
        handlehere(text, time);
      }}>
       <MdDoneOutline />
      </button>
     </>
  )
}
export default Screen;