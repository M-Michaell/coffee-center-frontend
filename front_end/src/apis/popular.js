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
      .get(`/movie/popular?language=${language}&page=${page}`)
      .then((res) => {
        setPopularData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page, language]);

  return {
    isLoading,
    popularData,
  };
}
