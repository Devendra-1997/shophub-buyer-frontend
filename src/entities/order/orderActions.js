/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import { setOrder, setOrders } from "./orderSlice";
import { createOrder, getOrder, getOrders } from "./orderAxiosHelper";
import { setIsCreating } from "../../utility/promiseSlice";

// CREATE AN ORDER
export const createOrderAction = (orderData) => async (dispatch) => {
  dispatch(setIsCreating(true));
  try {
    const result = await createOrder(orderData);
    dispatch(setIsCreating(false));

    if (result?.status === "error") {
      return toast.error(result.message);
    }

    toast.success("Order placed successfully!");
    dispatch(getOrdersAction()); // Refresh list of orders
  } catch (error) {
    dispatch(setIsCreating(false));
    toast.error("Failed to place order.");
  }
};

// GET A SINGLE ORDER
export const getOrderAction = (orderId) => async (dispatch) => {
  try {
    const result = await getOrder(orderId);

    if (result?.status === "error") {
      return toast.error(result.message);
    }

    dispatch(setOrder(result.data));
  } catch (error) {
    toast.error("Failed to fetch order details.");
  }
};

// GET ALL ORDERS FOR THE CUSTOMER
export const getOrdersAction = () => async (dispatch) => {
  try {
    const result = await getOrders();

    if (result?.status === "error") {
      return toast.error(result.message);
    }

    dispatch(setOrders(result.data));
  } catch (error) {
    toast.error("Failed to fetch orders.");
  }
};
