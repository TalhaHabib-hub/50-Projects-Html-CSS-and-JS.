import { useSelector } from "react-redux";

const Result = () => {
  const counterObj = useSelector((store) => store.counter); // here talha the counter is the slice because we have named that counter
  const counter = counterObj.counterVal;
  return (
    <p className="col-lg-8 mx-auto fs-5 text-muted">
      The current value of counter in store is {counter}
    </p>
  );
};

export default Result;
// for action dispatch you have to use useDispatch go to controller
