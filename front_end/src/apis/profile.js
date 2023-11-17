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
  }, []); 

  return { detailsData };
}

export const useAddressData = () => {
  const [addressData, setAddressData] = useState();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/accounts/api/address');
      setAddressData(response.data.Users);
    } catch (error) {
      console.error('Error fetching address data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run the effect only once

  const refetchAddresses = () => {
    fetchData();
  };

  return { addressData, refetchAddresses };
};

export function usePaymentData() {
  const [paymentData, setPaymentData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/accounts/api/payment`)
      .then((res) => {
        setPaymentData(res.data.Users);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []); // Provide an empty dependency array to run the effect only once

  return { paymentData };
}




export const deleteAddress = async (id) => {
  try {
    const response = await axiosInstance.delete(`/accounts/api/address/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



