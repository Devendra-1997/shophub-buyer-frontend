import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
//create slice
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
const { reducer: userReducer, actions } = userSlice;
export const { setUser } = actions;
export default userReducer;
