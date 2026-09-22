//Talha remember this to use the store use

import { useSelector } from "react-redux";

//useSelector hooks gets a slice of the store.

const Result = () => {
  const {counterVal} = useSelector((store) => store.counter);
  return <p className="col-lg-8 mx-auto fs-5 text-muted">The current value of counter in store is {counterVal }</p>;
};

export default Result;
// for action dispatch you have to use useDispatch go to controller