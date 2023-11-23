import { axiosInstance } from "../config";

export function AddRate(userId, productId, rateValue) {
    const postedData = { user: userId, product: productId, rateValue: rateValue };
  
    return axiosInstance.post(`/create-rate/`, postedData)
      .then((res) => res.data.rate.rate)
      .catch((error) => {
        console.error("Error fetching rate:", error);
        
      });
  }
  