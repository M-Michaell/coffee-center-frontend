import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function addToWishListAPI(item, wishlistId) {
  axiosInstance
    .post(`wishlist_details/${wishlistId}`, item)
    .then((response) => {
      toast.success("Product added to wishlist successfully.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    })
    .catch((error) => {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
}

export function deleteFromWishlistAPI(item, wishlistId) {
  axiosInstance
    .delete(`wishlist_details/${wishlistId}`, {
      data: { ...item },
    })
    .then((response) => {
      toast.success("Product deleted from wishlist successfully.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    })
    .catch((error) => {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
}
