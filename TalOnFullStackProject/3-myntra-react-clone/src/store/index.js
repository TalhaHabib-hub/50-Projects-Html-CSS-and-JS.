import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice'
import FetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSlice';

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});

export default myntraStore;


// 1. created slice
// 2. creatd store
// 3. providing
