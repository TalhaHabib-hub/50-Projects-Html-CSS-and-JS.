import styles from "./Screen.module.css";
import { useRef } from "react";
import { MdDoneOutline } from "react-icons/md";

const Screen = ({ handleAddTodo }) => {
  const duetask = useRef("");
  const duedate = useRef("");
  return (
    <form action="" onSubmit={(event) => {
      event.preventDefault(); {/*so this will prevent the default submiting to the on server and will just submite to function which I am wanting , I am writing handler so I will handle*/}
          handleAddTodo(duetask.current.value, duedate.current.value);
          duedate.current.value = "";
          duetask.current.value = "";
        }}>
      <input type="text" className={styles.screen} ref={duetask} />
      <input type="time" className={styles.time} ref={duedate} />
      <button
         type="submit"
        className={styles.add}
      

      >
        {/* any button if is only one and it has no type then it will be considered as submit button 
        jab ma na tamam inputs ko form ma rap up kia to jub bhi ma koi data add karraha hun using submit button to data list ma aik dam dikta ha oor phir ghaiip ho jata ha iska reason ya ha ka tham na is form ko koi action nahi di ha  to data sida is currnt page ka server pa daal deta ha jiski wajah sa page reload hota ha or code ma likha hua data hama dikhata ha so the data will be submitted to local host 5100 or something it does it by default to avoid that I have added onSubmit event listner inside the button (submit) */}
        <MdDoneOutline />
      </button>
    </form>
  );
};
export default Screen;
