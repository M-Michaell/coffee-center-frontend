import { axiosInstance } from "../config";

export function decreaseAPI(data, session) {
    // console.log("Increasing",data)
    axiosInstance.put(`cart/shopping-sessions/${session}/update_cart_item/`, data)
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
        // Handle the error as needed
      });
  }