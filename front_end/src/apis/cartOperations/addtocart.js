import { axiosInstance } from "../config";

export function addToCartAPI(data, session) {
    // console.log("Increasing",data)
    axiosInstance.post(`cart/shopping-sessions/${session}/add_to_cart/`, data)
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
        // Handle the error as needed
      });
  }