import {useEffect, useState} from "react";
import {axiosInstance} from "./config";

export function ProductItems(){
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("products/")
            .then((res)=>{console.log("show me inside",res.data.list);setProduct(res.data.list)})
            .catch((err)=>{console.log(err)})
    }, []);
    console.log("show me products",products);
    return (products);

}