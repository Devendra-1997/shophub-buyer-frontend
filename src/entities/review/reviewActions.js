import { toast } from "react-toastify";
import { createReview, getReviews } from "./reviewAxiosHelper";
import { setReviews } from "./reviewSlice";

// GET ALL REVIEWS
export const getReviewsAction = () => async (dispatch) => {
  const result = await getReviews();

  if (result?.status === "success") {
    dispatch(setReviews(result.data));
  }
};

// create a review
export const createReviewAction = (reviewObj) => async (dispatch) => {
  const result = await createReview(reviewObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // once a revew is submitted, we refetch burrows
  dispatch(getReviewsAction());
};
