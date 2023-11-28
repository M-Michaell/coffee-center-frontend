import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function increaseAPI(data, session) {
    axiosInstance.put(`cart/shopping-sessions/${session}/update_cart_item/`, data)
      .then((response) => {
        toast.success('Quantity increased successfully', 
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