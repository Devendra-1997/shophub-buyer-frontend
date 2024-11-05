import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // List of all orders for the customer
  order: {}, // Details of a single order
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

const { reducer: orderReducer, actions } = orderSlice;

export const { setOrders, setOrder } = actions;
export default orderReducer;
