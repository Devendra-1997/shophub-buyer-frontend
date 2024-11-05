import { axiosApiCall } from "../../utility/axiosHelper";

// ORDER API URL
const ORDER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/order`;

// CREATE AN ORDER
export const createOrder = (orderData) => {
  return axiosApiCall({
    method: "post",
    url: ORDER_API_URL,
    data: orderData,
    isPrivate: true, // Orders are usually customer-specific and need authentication
  });
};

// GET A SINGLE ORDER
export const getOrder = (orderId) => {
  return axiosApiCall({
    method: "get",
    url: `${ORDER_API_URL}/${orderId}`,
    isPrivate: true,
  });
};

// GET ALL ORDERS FOR THE CUSTOMER
export const getOrders = () => {
  return axiosApiCall({
    method: "get",
    url: ORDER_API_URL,
    isPrivate: true,
  });
};
