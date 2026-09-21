const redux = require("redux"); // import statment runs this way in node.js we will learn all these things in node's lecture

const INITIAL_VALUE = {
  counter: 0,
};
//Talha Sir said that store is immutable we can't change its value,Talha the store value at first will be null
const reducer = (store = INITIAL_VALUE, action) => {// here store will use the value of INITIAL_VALUE  when the value of store is zero Talha jan remember it is a default value Talha on the next time when store has some value the INITIAL_VALUE's value will not be assigned to store
  let newStore = store;
  if (action.type === "INCREMENT") {
    console.log("reducer called", action);
    return { counter: store.counter + 1 }; // Talha here a whole object is been returned
  }
  return newStore;
};
// here we have created a strore: but it is showing depricated no problem we are learning basics
const store = redux.createStore(reducer);


// There is a slight  differene between subscriber and someone using the value
const subscriber = () => {
  console.log("store: ", store);

  const state = store.getState();// when you say i don't need subscription just give me the value, here it is giving the whole value 
  console.log("and state :", state);
  console.log(state);
};
//here the function is the subscriber Talha letter on we will see that react components will be the subscriber
store.subscribe(subscriber);// here actually the subscription is created the subscriber function is subscribed to store now so Talha it basically mean that subscriber is subscrib ed so when ever your value changes call it function will run and by the above function it will get whatever it needs

// This is throwing actions
store.dispatch({ type: "INCREMENT" });// here action is created 
store.dispatch({ type: "INCREMENT" });//Talha action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
