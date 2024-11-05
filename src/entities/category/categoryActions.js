import { toast } from "react-toastify";
import { setCategories } from "./categorySlice";
import { getCategories } from "./categoryAxiosHelper";

// GET ALL CATEGORIES
export const getCategoriesAction = () => async (dispatch) => {
  const result = await getCategories();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setCategories(result.data));
};
