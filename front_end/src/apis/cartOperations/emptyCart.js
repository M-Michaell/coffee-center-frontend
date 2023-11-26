import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function EmptyCart(session) {
  axiosInstance
    .post(`cart/shopping-sessions/${session}/empty_cart_items/`)
    .then((response) => {
      toast.success("Products deleted from the cart successfully.", {
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
      console.log(error);
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
