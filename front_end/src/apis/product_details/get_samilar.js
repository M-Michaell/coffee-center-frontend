import { axiosInstance } from "../config";

function Samilar(product) {
 return axiosInstance
    .get(`get_samilar/`, { params: product })
    .then((res) => res.data)

    .catch((err) => {
      console.log(err);
    });
}

export default Samilar;
