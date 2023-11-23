import { axiosInstance } from "../config";

export function ProductDetails(id) {
  return axiosInstance
    .get(`/product/${id}`)
    .then((res) => res.data)

    .catch((err) => {
      console.log(err);
    });
}
