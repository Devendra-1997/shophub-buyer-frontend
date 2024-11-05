import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./entities/category/categorySlice";
import productReducer from "./entities/product/productSlice";
import orderReducer from "./entities/order/orderSlice";
import reviewReducer from "./entities/review/reviewSlice";
import userReducer from "./entities/user/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    review: reviewReducer,
  },
});

export default store;
