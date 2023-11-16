import {useEffect, useState} from "react";
import {axiosInstance} from "./config";

export function SearchResult(searchWord ,page,filters) {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});
    console.log("api",searchWord)

  const url = `/search?search_word=${searchWord}&filters=${filters
    ? Object.entries(filters)
        .filter(([key, value]) => value != null && value !== '')
        .map(([key, value]) => `${key}=${value}`)
        .join(',')
    : ''}&page=${page}`;
  
    console.log("url", url)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url);
        const data = response.data;
        setProducts(data.products);
        setFilterOptions(data.filter_options);
        setPaginationInfo(data.pagination_info);
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [searchWord, filters, page, setProducts, setFilterOptions, setPaginationInfo, url]);

  
  return 
  ;
}
