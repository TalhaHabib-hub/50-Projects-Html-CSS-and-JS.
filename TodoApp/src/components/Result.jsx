
import { useContext } from "react";
import {ContextWala} from "../store/usingContext";
import ResultJunior from "./ResultJunior";


const Result = () => {
  const {todos} = useContext(ContextWala)

  

  return (
     <>
      {todos.map((each) => (
    //       <div className={styles.resultdiv} key={each.id}>
    //   <p className={styles.text}>{each.text}</p>
    //   <p className={styles.time}>{each.time}</p>
    //   <button className={styles.delete} onClick={() => handleDeleteTodo(each.id)}>
    //     <MdDelete />
    //   </button>
        // </div>
        <ResultJunior key={each.id} each={each}></ResultJunior>
        ))}
   </>
  );
};
export default Result;
