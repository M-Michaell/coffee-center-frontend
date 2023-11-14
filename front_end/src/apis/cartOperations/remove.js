import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function deleteAPI(data, session) {
  axiosInstance
    .delete(`cart/shopping-sessions/${session}/delete_cart_item/`, {
      data: { product: data },
    })
    .then((response) => {
      toast.success("Product deleted from cart successfully.", {
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
      console.log(error)
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
