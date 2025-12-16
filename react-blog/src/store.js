import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/practice/features/counters/CounterSlice';

// Set up the Redux store with the counter reducer
const store = configureStore({
  reducer: {
    counter: counterReducer, // This key must match the slice name and selector
  },
});

export default store;
