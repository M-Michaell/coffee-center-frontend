import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function CreatorsData() {
  const [creators, setCreators] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/creators/`)
      .then((res) => {
        setCreators(res.data);
        console.log(res);
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
        console.log(res);
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
        console.log(res);
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
        console.log(res);
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
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return  origins ;
}
//
//
//
// export function CreatorsData() {
//   const [creators, setCreators] = useState();
//
//   useEffect(() => {
//     axiosInstance
//       .get(`/creators/`)
//       .then((res) => {
//         setCreators(res.data);
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//
//   return  creators ;
// }
