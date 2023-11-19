import { toast } from "react-toastify";
import { axiosInstance } from "../config";

export function confirmOrder(data, session) {
    // console.log("Increasing",data)
    return axiosInstance.post(`/order/data/`, data)
      .then((response) => {
        console.log('response*****id',response.data.order_id)
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