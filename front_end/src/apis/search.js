import {useEffect, useState} from "react";
import {axiosInstance} from "./config";

export function SearchResult(searchWord ,page,filters) {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});
    console.log("api",searchWord)

    const url = `/search?search_word=${searchWord}&filters=${Object.entries(filters)
        .filter(([key, value]) => value && value.length > 0)  
        .map(([key, value]) => `${key}=${value.join('_')}`)
        .join(',')}&page=${page}`;
  


  useEffect(() => {
    axiosInstance
      .get(url)
      .then((response) => {
        const data = response.data;
        setProducts(data.products);
        setFilterOptions(data.filter_options);
        setPaginationInfo(data.pagination_info);
        console.log(data)
      })
      .catch((err) => console.log(err));
  },  [searchWord, filters, page, setProducts, setFilterOptions, setPaginationInfo, url]); 

  return {
    products,paginationInfo,filterOptions
  }
  ;
}
