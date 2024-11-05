import { toast } from "react-toastify";
import { setProduct, setProducts } from "./productSlice";
import { getProduct, getProducts } from "./productAxiosHelper";

// GET A PRODUCT
export const getProductAction = (_id) => async (dispatch) => {
  const result = await getProduct(_id);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setProduct(result.data));
};

// GET ALL PRODUCTS
export const getProductsAction = () => async (dispatch) => {
  const result = await getProducts();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setProducts(result.data));
};
