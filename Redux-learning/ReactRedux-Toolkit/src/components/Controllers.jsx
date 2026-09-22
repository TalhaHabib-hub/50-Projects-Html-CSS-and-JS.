import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions} from "../store/counter";
import { privacyActions} from "../store/privacy";
const Controller = () => {
  const entered = useRef();
  const disptachingTalha = useDispatch();

  const handleIncrement = () => {
   disptachingTalha(counterActions.increment());
  };
  const handleDecrement = () => {
   disptachingTalha(counterActions.decrement());
  };

  const handleAdd = () => {
    disptachingTalha(counterActions.add({ num: entered.current.value }));
    entered.current.value = "";
  };
  const handleSub = () => {
   disptachingTalha(counterActions.subtract(Number(entered.current.value)))
    entered.current.value = "";
  };

  const handlePrivacy = () => {
    disptachingTalha(privacyActions.toggle())
  };
  return (
    <>
      <div className="d-inline-flex gap-2 mb-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-success" onClick={handlePrivacy}>
          Privacy Toggle
        </button>
      </div>
      <br />
      <input type="number" ref={entered} style={{ border: '2px solid black', height: '36px',position:'relative',top:'3px',borderRadius:'4px'}} />
      <button type="button" className="btn btn-danger" onClick={handleAdd} style={{border:'2px solid pink',height:'39px'}} >
        Add+
      </button>
      <button type="button" className="btn btn-warning" onClick={handleSub} style={{border:'2px solid yellow',height:'39px'}}>
        Sub-
      </button>
    </>
  );
};

export default Controller;
