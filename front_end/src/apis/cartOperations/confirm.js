import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function confirmOrder(data, session) {
    return axiosInstance.post(`/order/data/`, data)
      .then((response) => {
        toast.success('ordered confirmed successfully', 
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
          return(response.data.order_id)
      })
      .catch((error) => {
        console.error("API Error:", error);

      });
  }