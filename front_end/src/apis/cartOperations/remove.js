import { axiosInstance } from "../config";

export function deleteAPI(data, session) {

    console.log("deletttttttttttttttttttttttttttt",data)


    axiosInstance.delete(`cart/shopping-sessions/${session}/delete_cart_item/`, data)
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
        // Handle the error as needed
      });
  }