import { axiosInstance } from "../config";

export function confirmOrder(data, session) {
    // console.log("Increasing",data)
    axiosInstance.post(`/order/data/`, data)
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);

      });
  }