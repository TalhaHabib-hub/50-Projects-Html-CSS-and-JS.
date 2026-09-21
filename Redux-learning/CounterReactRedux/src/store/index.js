import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy:false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let tempStore = store;
  if (action.type === "INCREMENT") {
    return { ...store,counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store,counter: store.counter - 1 };
  } else if (action.type === "ADDING") {
    return { ...store,counter: store.counter + eval(action.payload.num)};
  } else if (action.type === "SUBTRACTING") {
    return { ...store,counter: store.counter - action.payload.num };
  }else if (action.type === "PRIVACY") {
    return { ...store, privacy:!store.privacy};
  }
  return tempStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
