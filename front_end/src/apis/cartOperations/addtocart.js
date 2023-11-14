import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function addToCartAPI(data, session) {
    axiosInstance.post(`cart/shopping-sessions/${session}/add_to_cart/`, data)
      .then((response) => {
        toast.success(response.data.message, 
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
      })
      .catch((error) => {
        toast.error(error.message, 
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
      });
  }