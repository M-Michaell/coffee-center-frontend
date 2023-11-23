import {useEffect, useState} from "react";
import { axiosInstance } from '../config';

export function ProductDetails(id){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(`/product/${id}`)
            .then((res)=>{
                setProduct(res.data);
            
            })
            .catch((err)=>{console.log(err)})
    }, [id]);
    return{ product}

}