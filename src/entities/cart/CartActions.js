import { toast } from "react-toastify";
import { addToCart, updateCart } from "./CartSlice";

// add to cart
export const addToCartAction = (item) => async (dispatch) => {
  dispatch(addToCart(item));
  toast.success("Product added to Cart");
};

// update cart
export const updateCartAction = (item) => async (dispatch) => {
  dispatch(updateCart(item));
};
