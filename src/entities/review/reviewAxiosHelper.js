import { axiosApiCall } from "../../utility/axiosHelper";

// Define the base URL for the reviews API
const REVIEW_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/review`;

// GET ALL REVIEWS
export const getReviews = () => {
  return axiosApiCall({
    method: "get",
    url: REVIEW_API_URL,
  });
};

// GET A SINGLE REVIEW
export const getReview = (reviewId) => {
  return axiosApiCall({
    method: "get",
    url: `${REVIEW_API_URL}/${reviewId}`,
  });
};

// CREATE A REVIEW
export const createReview = (reviewObj) => {
  return axiosApiCall({
    method: "post",
    url: REVIEW_API_URL,
    data: reviewObj,
    isPrivate: true, // Assuming reviews require user authentication
  });
};
