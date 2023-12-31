import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function CreatorsData() {
  const [creators, setCreators] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/creators/`)
      .then((res) => {
        setCreators(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return  creators ;
}


export function CaffeinesData() {
  const [caffeines, setcaffeines] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/caffeines/`)
      .then((res) => {
        setcaffeines(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return  caffeines ;
}


export function CoffeeTypes() {
  const [coffeeTypes, setCoffeeTypes] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/coffeeTypes/`)
      .then((res) => {
        setCoffeeTypes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return  coffeeTypes ;
}


export function RoastingDegrees() {
  const [roastingDegrees, setRoastingDegrees] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/roastingDegrees/`)
      .then((res) => {
        setRoastingDegrees(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return  roastingDegrees ;
}


export function Origins() {
  const [origins, setOrigins] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/origins/`)
      .then((res) => {
        setOrigins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return  origins ;
}


export function Products() {
  const [origins, setOrigins] = useState();

  useEffect(() => {
    axiosInstance
      .get(`products/`)
      .then((res) => {
        setOrigins(res.data.all_product);
      })
      .catch((err) => console.log(err));
  }, []);

  return  origins ;

}
export function Discounts() {
  const [discounts, setDiscounts] = useState();

  useEffect(() => {
    axiosInstance
      .get(`discount_list/`)
      .then((res) => {
        setDiscounts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return  discounts ;
}



