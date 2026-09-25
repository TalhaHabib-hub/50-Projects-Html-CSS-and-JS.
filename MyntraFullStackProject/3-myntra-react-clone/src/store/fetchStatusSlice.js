import { createSlice } from '@reduxjs/toolkit'

const FetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentlyFetching:false,
  },
  reducers: {
   markFetchDone: (state) => {
      state.fetchDone=true;
    },
    markFetchingStarted: (state) => {
       state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      console.log(state);
     state.currentlyFetching = false;
    }
  }
})

export const FetchStatusSliceAction = FetchStatusSlice.actions;
export default FetchStatusSlice;


