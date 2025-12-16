import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

// Create a Redux slice for counter state
const counterSlice = createSlice({
  name: "counter", // This key must match the key in your store
  initialState,
  reducers: {
    increament: (state) => { state.value += 1; }, // Increment action
    decreament: (state) => { state.value -= 1; }, // Decrement action
  },
});

// Export actions and reducer
export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
