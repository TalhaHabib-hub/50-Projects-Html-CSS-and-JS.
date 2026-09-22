import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {// look Talha these are methods (actions)
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += eval(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= action.payload;//added in behind
    },
 
  },
});

export const counterActions = counterSlice.actions; 
export default counterSlice;