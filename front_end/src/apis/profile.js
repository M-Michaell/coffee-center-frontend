import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useUserData() {
  const [detailsData, setDetailsData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/accounts/api/`)
      .then((res) => {
        setDetailsData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []); // Provide an empty dependency array to run the effect only once

  return { detailsData };
}
