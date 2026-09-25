import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { FetchStatusSliceAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchStatusSliceAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
    .then((res) => res.json())
    .then((data) => {
      dispatch(itemsAction.addInitialItems(data.items));
      dispatch(FetchStatusSliceAction.markFetchDone());
      dispatch(FetchStatusSliceAction.markFetchingFinished());
    });
    return () => {
      controller.abort;
    }
    
  }, [fetchStatus]);
  return (
    <>
    </>
  );
};

export default FetchItems;
