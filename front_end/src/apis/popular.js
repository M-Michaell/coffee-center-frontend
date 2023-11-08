import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";

export function usePopularData(page) {
  const [popularData, setPopularData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state) => state.language.current_lang);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/products/`)
      .then((res) => {
        console.log(res);
        setPopularData(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page, language]);

  return {
    isLoading,
    popularData,
  };
}
