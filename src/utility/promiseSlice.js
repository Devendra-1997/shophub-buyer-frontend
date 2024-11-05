import { createSlice } from "@reduxjs/toolkit";

// Initial state for managing the creating state
const initialState = {
  isCreating: false, // Tracks if a creation process is ongoing
};

// Create a slice of the Redux store for promises
const promiseSlice = createSlice({
  name: "promise",
  initialState,
  reducers: {
    // Action to set the isCreating state
    setIsCreating: (state, action) => {
      state.isCreating = action.payload; // Update the isCreating state based on the action payload
    },
  },
});

// Destructure the reducer and actions from the slice
const { reducer: promiseReducer, actions } = promiseSlice;

// Export the action for setting isCreating
export const { setIsCreating } = actions;

// Export the reducer to be included in the store
export default promiseReducer;
