import {useEffect, useState} from "react";
import {axiosInstance} from "./config";

export function ProductItems(page){
    console.log(page);
    const [products, setProduct] = useState([]);
    const [paginationInfo, setPaginationInfo] = useState({});

    useEffect(() => {
        axiosInstance
            .get(`/products/?page=${page}`)
            .then((res)=>{
                setProduct(res.data.products);
                setPaginationInfo(res.data.pagination_info);
            
            
            })
            .catch((err)=>{console.log(err)})
    }, [page]);
    return{ products,paginationInfo}

}